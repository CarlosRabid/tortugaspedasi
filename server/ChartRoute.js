const express = require('express')
const router = express.Router()
const Form = require('./models/MegaForm');

// ==============================
// This solution comes from here: 
// https://stackoverflow.com/questions/20630676/how-to-group-objects-with-timestamps-properties-by-day-week-month/20631750#20631750

let byday = {};
let byweek = {};
let bymonth = {};
let byyear = {};

const groupday = function (value, index, array) {
    try {
        let d = new Date(value.observation.date);
        d = Math.floor(d.getTime() / (1000 * 60 * 60 * 24));
        byday[d] = byday[d] || [];
        byday[d].push(value);
    } catch (error) {
        console.log(error)
    }
}
const groupweek = function (value, index, array) {
    let d = new Date(value.observation.date);
    d = Math.floor(d.getTime() / (1000 * 60 * 60 * 24 * 7));
    byweek[d] = byweek[d] || [];
    byweek[d].push(value);
}
const groupmonth = function (value, index, array) {
    let d = new Date(value.observation.date);
    d = (d.getFullYear() - 1970) * 12 + d.getMonth();
    bymonth[d] = bymonth[d] || [];
    bymonth[d].push(value);
}

const groupyear = function (value, index, array) {
    let d = new Date(value.observation.date)
    d = (d.getFullYear() - 1970)
    byyear[d] = byyear[d] || []
    byyear[d].push(value)
}
// ==============================


const groupBy = (dataArray, group) => {
    if (group === "day") {
        dataArray.map(groupday)
        return byday
    } else if (group === "week") {
        dataArray.map(groupweek)
        return byweek
    } else if (group === "month") {
        dataArray.map(groupmonth)
        return bymonth
    } else if (group === "year") {
        dataArray.map(groupyear)
        return byyear
    }
}


const getTurtleCount = (data) => {
    let turtleCount = 0
    for (let d of data) {
        if (d.turtle.hasData === true) {
            turtleCount++
        }
    }

    return turtleCount
}

const getNestCounts = (data) => {
    let nestCounts = {
        nestCount: 0,
        eggCount: 0
    }
    data.forEach(d => {
        if (d.nest.hasData === true) {
            nestCounts.nestCount++
            nestCounts.eggCount += d.nest.eggCount
        }
    })
    return nestCounts
}

const getSpeciesCount = (data) => {
    let speciesCount = {
        Cc: 0,
        Lo: 0,
        Cm: 0,
        Ei: 0,
        Dc: 0,
    }
    data.forEach(d => {
        if (d.turtle.hasData === true) {
            speciesCount[d.turtle.species]++
        }
    })
    return speciesCount
}

const getMoonPhase = (data) => {
    let moonPhase
    if (Array.isArray(data)) {
        moonPhase = data[0].observation.moonPhase
    } else {
        moonPhase = data.observation.moonPhase
    }
    return moonPhase
}

const createFilteredObject = (data) => {
    let dataKeys = Object.keys(data)
    const bigData = []
    dataKeys.forEach(key => {
        let turtleCount = getTurtleCount(data[key])
        let nestCounts = getNestCounts(data[key])
        let speciesCount = getSpeciesCount(data[key])
        let moonPhase = getMoonPhase(data[key])
        let newDataObject = {
            date: key,
            turtleCount: turtleCount,
            eggCount: nestCounts.eggCount,
            moonPhase: moonPhase,
            nestCount: nestCounts.nestCount,
            speciesCount: speciesCount
        }
        bigData.push(newDataObject)
    })
    return bigData
}

const resetCounters = function () {
    byday = {}
    byweek = {}
    bymonth = {}
    byyear = {}
}

const createQuery = function (filters) {

    //Example filters:
    /*{
        "turtle.gender": ["female"],
        "observation.tide": ["high", "low-to-high"],
        "turtle.species": ["Cc", "Lo", "Cm", "Ei", "Dc"]
    }*/

    if (Object.keys(filters).length === 0) { return {} }

    const fields = Object.keys(filters)
    const query_filters = []

    // creating an array of these: { field: { $in: ['value 1', 'value 2'] } }
    fields.forEach(field => {
        query_filters.push({ [field]: { $in: filters[field] } })
    })

    return { "$and": query_filters }
}


router.post('/formData/:group', async function (req, res) {
    resetCounters()

    const group = req.params.group
    const filters = req.body
    const query = createQuery(filters)
    
    Form.find(query, (err, response) => {
        // For each groupedByDate key, create an obejct date being key, moonphase being from first obj and turtle count (if turtle has data = true)
        const groupedByGroup = groupBy(response, group)
        const Data = createFilteredObject(groupedByGroup)
        res.send(Data)
    })
})


module.exports = router
