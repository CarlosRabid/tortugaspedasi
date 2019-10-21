const express = require('express')
const router = express.Router()
const request = require('request')

const Form = require('./models/Form');
const Shift = require('./models/Shift');
const Observation = require('./models/Observation');
const Turtle = require('./models/Turtle');
const Nest = require('./models/Nest');
// const UserLogin = require('./models/UserLogin');

/* API Requests */

router.get('/form', (req, res) => {

    getPosition = () => {
        function geoSucess(position){
          let geoCoords= {
            lat:position.coords.latitude,
            long:position.coords.longitude
          }
          alert(`This are your coordinates: - Latitude: ${geoCoords.lat} - Longitude: ${geoCoords.long}`)
          return(geoCoords.lat, geoCoords.long)
        }
    
        function geoError(errorPosition){
            alert("Error - No position available")
        }
    
        const geoOptions={
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 25000
        }
        
        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(geoSucess, geoError,geoOptions );
          console.log("True")
        }else{
          console.log("Geolocation is not enabled on this device")
    
        }
      }
    
    let apiAdd = `https://api.solunar.org/solunar/${geoCoords.lat},${geoCoords.long},20191018,-5`
    console.log(apiAdd)

    request(apiAdd, function(error, response, body){
        let fulldataMoon = JSON.parse(body)
        let dataMoon ={
            sunrise:fulldataMoon.sunRise,
            suntransit:fulldataMoon.sunTransit,
            sunset:fulldataMoon.sunSet,
            moonrise:fulldataMoon.moonRise,
            moonunder:fulldataMoon.moonUnder,
            moonphase:fulldataMoon.moonPhase,
            moonillumination:fulldataMoon.moonIllumination
        }
        console.log(dataMoon)
    })
    res.send(dataMoon)
})




/* Route requests */
router.get('/form', (req, res) => {
    Form.find({}, (err, forms) =>{
      if (err) throw err;
      else res.send(forms)
    })
    .populate('shift')
    .populate('observation')
    .populate('turtle')
    .populate('nest')
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

// Form.findOne({})
// .populate('observation')
// .exec((err, form) => console.log(form))

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