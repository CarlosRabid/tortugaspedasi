const express = require('express')
const router = express.Router()
const request = require('request')
const Form = require('./models/Form');
const Shift = require('./models/Shift');
const Observation = require('./models/Observation');
const Turtle = require('./models/Turtle');
const Nest = require('./models/Nest');
const Beach = require('./models/Beach');
// const UserLogin = require('./models/UserLogin');

/* API Requests */

router.get('/solunar', (req, res) => {
    let apiAdd = `https://api.solunar.org/solunar/${lat},${long},${date},-5`

    request(apiAdd, function (error, response, body) {
        let fulldataMoon = JSON.parse(body)
        let moonData = {
            moonphase: fulldataMoon.moonPhase,
            qmoonphase: fulldataMoon.moonPhase,
            sunrise: fulldataMoon.sunRise,
            suntransit: fulldataMoon.sunTransit,
            sunset: fulldataMoon.sunSet,
            moonrise: fulldataMoon.moonRise,
            moonunder: fulldataMoon.moonUnder,
            moonphase: fulldataMoon.moonPhase,
            moonillumination: fulldataMoon.moonIllumination
        }
    })
    res.send(moonData)
})




/* Route requests */



router.get('/forms', (req, res) => {
    Form.find({}, (err, forms) => console.log(err))
        .populate({
            path: 'turtle nest shift observation',
            populate: {
                path: 'location'
            }
        })
        .exec((err, forms) => {
            res.send(forms)
        })
})

router.post('/shift', (req, res) => {
    let newShift = new Shift({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        date: Date().toString()
    })
    newShift.save()
    res.send(newShift)
})

router.post('/observation', (req, res) => {
    let newObservation = new Observation({
        date: req.body.date,
        location: req.body.location,
        moonPhase: req.body.moonphase,
        tide: req.body.string,
        comments: req.body.comments,
    })
    newObservation.save()
    res.send(newObservation)
})

router.post('/turtle', (req, res) => {
    let newTurtle = new Turtle({
        species: req.body.species,
        gender: req.body.gender,
        condition: {
            status: req.body.status,
            stage: req.body.stage
        },
        dimensions: {
            plain: {
                length: req.body.length,
                width: req.body.width
            },
            curve: {
                length: req.body.length,
                width: req.body.width
            }
        },
        markings: {
            rightSide: req.body.rightSide,
            leftSide: req.body.leftSide
        }
    })
    newTurtle.save()
    res.send(newTurtle)
})

router.post('/nest', (req, res) => {
    let newNest = new Nest({
        eggCount: req.body.eggCount,
        layTime: new Date().toString(),
        hatchEst: req.body.hatchEst,
        rehomed: req.body.rehomed,
        salvageable: req.body.salvageable,
    })
    newNest.save()
    res.send(newNest)
})


router.put(('/updateShift'), (req, res) => {
    Form.findByIdAndUpdate(req.body.id, { shift: req.body.shift }, { new: true }, (err, doc) => {
        if (err) throw err;
        else res.send(doc)
    })
})

router.put(('/updateObservation'), (req, res) => {
    Form.findByIdAndUpdate(req.body.id, { observation: req.body.observation }, { new: true }, (err, doc) => {
        if (err) throw err;
        else res.send(doc)
    })
})

router.put(('/updateTurtle'), (req, res) => {
    Form.findByIdAndUpdate(req.body.id, { turtle: req.body.turtle }, { new: true }, (err, doc) => {
        if (err) throw err;
        else res.send(doc)
    })
})

router.put(('/updateNest'), (req, res) => {
    Form.findByIdAndUpdate(req.body.id, { nest: req.body.nest }, { new: true }, (err, doc) => {
        if (err) throw err;
        else res.send(doc)
    })
})

router.delete('/forms/:id', function (req, res) {
    let formToDelete = req.params.id
    Form.findOne({ id: formToDelete }, function (err, result) {
        result.remove()
        Form.find({}, function (err, response) {
            res.send(response)
        })
    })
})


router.get('/moonData', (req, res) => {
    let lat = 7.5303400;
    let long = -80.0269900;
    let apiAdd = `https://api.solunar.org/solunar/${lat},${long},20191018,-5`

    request(apiAdd, function (error, response, body) {
        let fulldataMoon = JSON.parse(body)
        let dataMoon = {
            sunrise: fulldataMoon.sunRise,
            suntransit: fulldataMoon.sunTransit,
            sunset: fulldataMoon.sunSet,
            moonrise: fulldataMoon.moonRise,
            moonunder: fulldataMoon.moonUnder,
            moonphase: fulldataMoon.moonPhase,
            moonillumination: fulldataMoon.moonIllumination
        }
        console.log(fulldataMoon)
    })

    res.send(dataMoon)
})


module.exports = router