const express = require('express')
const router = express.Router()

const Form = require('./models/Form');
const Shift = require('./models/Shift');
const Observation = require('./models/Observation');
const Turtle = require('./models/Turtle');
const Nest = require('./models/Nest');
// const UserLogin = require('./models/UserLogin');

/* API Get Request */


router.get('/forms', (req, res) => {
    Form.find({}, (err, forms) =>{
      if (err) throw err;
      else res.send(forms)
    })
})

router.post('/shift', (req,res) => {
    let newShift = new Shift ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        date: new Date().toString()
    })
    newShift.save()
    res.send(newShift)
})

router.post('/observation', (req, res) => {
    let newObservation = new Observation ({
        time: req.body.time,
        location: req.body.location,
        moonPhase: req.body.moonphase,
        tide: req.body.string,
        comments: req.body.comments,
    })
    newObservation.save()
    res.send(newObservation)
})

router.post('/turtle' , (req, res) => {
    let newTurtle = new Turtle ({
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
    let newNest = new Nest ({
    eggCount: req.body.eggCount,
    layTime: new Date().toString(),
    hatchEst: req.body.hatchEst,
    rehomed: req.body.rehomed,
    salvageable: req.body.salvageable,
    })
    newNest.save()
    res.send(newNest)
})

Form.findOne({})
.populate('observation')
.exec((err, form) => console.log(form))

router.post('/newForm', (req, res) => {
    let newShift = new Shift ({
        firstName: req.body.shift.firstName,
        lastName: req.body.shift.lastName,
        date: new Date().toString()
    })
    let newObservation = new Observation ({
        time: req.body.observation.time,
        location: req.body.observation.location,
        moonPhase: req.body.observation.moonPhase,
        tide: req.body.observation.tide,
        comments: req.body.observation.comments
    })
    let newTurtle = new Turtle ({
        species: req.body.turtle.species,
        gender: req.body.turtle.gender,
        condition: {
            status: req.body.turtle.condition.status,
            stage: req.body.turtle.condition.stage
        },
        dimensions: {
            plain: {
                length: req.body.turtle.dimensions.plain.length,
                width: req.body.turtle.dimensions.plain.width
            },
            curve: {
                length: req.body.turtle.dimensions.curve.length,
                width: req.body.turtle.dimensions.curve.width
            }
        },
        markings: {
            rightSide: req.body.turtle.markings.rightSide,
            leftSide: req.body.turtle.markings.leftSide
        }
    })
    let newNest = new Nest ({
        layTime: new Date().toString(),
        eggCount: req.body.nest.eggCount,
        hatchEst: req.body.nest.hatchEst,
        rehomed: req.body.nest.rehomed,
        salvageable: req.body.nest.salvageable
    })
    
    let newForm = new Form ({
        shift: newShift,
        observation: newObservation ,
        turtle: newTurtle,
        nest: newNest
    })
    newForm.save()
    newShift.save()
    newObservation.save()
    newTurtle.save()
    newNest.save()
    res.send(newForm)
    
})

router.put(('/updateShift'), (req, res) => {
    Form.findByIdAndUpdate(req.body.id, {shift: req.body.shift}, {new: true}, (err, doc) => {
        if (err) throw err;
        else res.send(doc)
    })
})

router.put(('/updateObservation'), (req, res) => {
    Form.findByIdAndUpdate(req.body.id, {observation: req.body.observation}, {new: true}, (err, doc) => {
        if (err) throw err;
        else res.send(doc)
    })
})

router.put(('/updateTurtle'), (req, res) => {
    Form.findByIdAndUpdate(req.body.id, {turtle: req.body.turtle}, {new: true}, (err, doc) => {
        if (err) throw err;
        else res.send(doc)
    })
})

router.put(('/updateNest'), (req, res) => {
    Form.findByIdAndUpdate(req.body.id, {nest: req.body.nest}, {new: true}, (err, doc) => {
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

module.exports = router