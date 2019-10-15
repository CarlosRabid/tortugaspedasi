const express = require('express')
const router = express.Router()

const Form = require('./models/Form');
const Shift = require('./models/Shift');
const Observation = require('./models/Observation');
const Turtle = require('./models/Turtle');
const Nest = require('./models/Nest');
const UserLogin = require('./models/UserLogin');

/* API Get Request */


router.get('/forms', (req, res) => {
    Form.find({}, (err, forms) =>{
      if (err) throw err;
      else res.send(forms)
    })
})

router.post('/newForm', (req, res) => {
    const shift = {}
    const observation = {} 
    const turtle = {} 
    const nest = {} 
    let newForm = new Form ({
        shift: shift,
        observation: observation,
        turtle: turtle,
        nest: nest
    })
    newForm.save()
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