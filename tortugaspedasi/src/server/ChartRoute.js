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

router.get('/formData', function (req, res) {
    Form.find({})
    .populate('turtle observation').then((response) => {
        let answer = groupBy(response)
        res.send(answer)
    })
})


module.exports = router
