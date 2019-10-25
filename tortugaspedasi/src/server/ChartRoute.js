const express = require('express')
const router = express.Router()
const Form = require('./models/Form');

// ==============================
// This solution comes from here: 
// https://stackoverflow.com/questions/20630676/how-to-group-objects-with-timestamps-properties-by-day-week-month/20631750#20631750

let byday = {};
let byweek = {};
let bymonth = {};
let byyear = {};

function groupday(value, index, array) {
    try {
        d = new Date(value.observation.date);
        d = Math.floor(d.getTime() / (1000 * 60 * 60 * 24));
        byday[d] = byday[d] || [];
        byday[d].push(value);
    } catch (error) {
        console.log(error)
    }
}
function groupweek(value, index, array) {
    d = new Date(value.observation.date);
    d = Math.floor(d.getTime() / (1000 * 60 * 60 * 24 * 7));
    byweek[d] = byweek[d] || [];
    byweek[d].push(value);
}
function groupmonth(value, index, array) {
    d = new Date(value.observation.date);
    d = (d.getFullYear() - 1970) * 12 + d.getMonth();
    bymonth[d] = bymonth[d] || [];
    bymonth[d].push(value);
}

function groupyear(value, index, array) {
    d = new Date(value.observation.date)
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
    } else if (group === "year"){
        dataArray.map(groupyear)
        return byyear
    }
}


getTurtleCount = (data) => {
    let turtleCount = 0
    data.forEach(d => {
        if (d.turtle.hasData === true) {
            turtleCount++
        }
    })
    return turtleCount
}

getNestCounts = (data) => {
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

getSpeciesCount = (data) => {
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

getMoonPhase = (data) => {
    let moonPhase
    if (Array.isArray(data)) {
        moonPhase = data[0].observation.moonPhase
    } else {
        console.log(data)
        moonPhase = data.observation.moonPhase
    }
    return moonPhase
}

createFilteredObject = (data) => {
    let dataKeys = Object.keys(data)
    bigData = []
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

router.get('/formData/:group', async function (req, res) {
    let group = req.params.group
    Form.find({})
        .populate('turtle observation nest').exec((err, response) => {
            let groupedByGroup = groupBy(response, group)
            let Data = createFilteredObject(groupedByGroup)
            // For each groupedByDate key, create an obejct date being key, moonphase being from first obj and turtle count (if turtle has data = true)
            res.send(Data)
        })
})


module.exports = router
