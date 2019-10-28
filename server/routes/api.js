const express = require('express')
const router = express.Router()
const MegaForm = require('../models/MegaForm')

router.post('/mega-form', (req, res) => {
    try {
        const megaForm = new MegaForm(req.body)
        megaForm.save()
        res.end()
    } catch (error) {
        console.log("Error saving form")
        console.error(error)
        res.send({ error: true })
    }
})

router.post('/mega-forms', (req, res) => {
    try {
        const forms = req.body
        for (let form of forms) {
            let mf = new MegaForm(form)
            mf.save()
        }
        res.end()
    } catch (error) {
        console.log("Error saving forms")
        console.error(error)
        res.send({ error: true })
    }
})

router.get('/all-data', (req, res) => {
    MegaForm.find({}, function (err, forms) {
        res.send(forms)
    })
})

module.exports = router