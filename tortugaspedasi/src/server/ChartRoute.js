const express = require('express')
const router = express.Router()
const Form = require('./models/Form');
const moment = require('moment')


const groupBy = (dataArray) => {
    dataArray.forEach(data => data.observation.date = moment(data.observation.date).format('MMMM DD YYYY'))
    return dataArray.reduce((result, currentValue) => {
        (result[currentValue.observation.date] = result[currentValue.observation.date] || []).push(
            currentValue
        )
        return result
    }, {})
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

router.get('/formData', function (req, res) {
    Form.find({})
        .populate('turtle observation nest').then((response) => {
            let groupedByDate = groupBy(response)
            let Data = createFilteredObject(groupedByDate)
            // For each groupedByDate key, create an obejct date being key, moonphase being from first obj and turtle count (if turtle has data = true)
            res.send(Data)
        })
})


module.exports = router
