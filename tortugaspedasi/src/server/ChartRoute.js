const express = require('express')
const router = express.Router()
const Form = require('./models/Form');
const moment = require('moment')

const groupBy = (dataArray) => {
    dataArray.forEach(data => data.observation.date = moment(data.observation.date).format('MMMM DD YYYY') )
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
        if(d.turtle.hasData === true){
            turtleCount++
        }
    })
    return turtleCount
}

getEggsCount = (data) => {
    let eggCount = 0
    data.forEach(d => {
        if(d.nest.hasData === true){
            eggCount += d.nest.eggCount
        }
    })
    return eggCount
}
createFilteredObject = (data) => {
    let dataKeys = Object.keys(data)
    bigData = []
    dataKeys.forEach(key => {
        let turtleCount = getTurtleCount(data[key])
        let eggCount = getEggsCount(data[key])
        let newDataObject = {
            date: key,
            turtleCount:turtleCount,
            eggCount:eggCount
        }

        bigData.push(newDataObject)
    })
    console.log(bigData)
    // date, moonphase, turtleCount, eggsCount, nestCount, foreachspeciesacount, MAYBE:survivedTurtleBabies, , dimensionObject, statesObject maybe
}

router.get('/formData', function (req, res) {
    Form.find({})
    .populate('turtle observation nest').then((response) => {
        let groupedByDate = groupBy(response)
        createFilteredObject(groupedByDate)
        // For each groupedByDate key, create an obejct date being key, moonphase being from first obj and turtle count (if turtle has data = true)
        let turtleDateMoon = []
        res.send(groupedByDate)
    })
})


module.exports = router
