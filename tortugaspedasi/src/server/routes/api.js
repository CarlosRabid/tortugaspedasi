const express = require('express')
const router = express.Router()
const MegaForm = require('../models/MegaForm')

router.post('/mega-form', (req, res) => {
    const megaForm = new MegaForm(req.body)
    megaForm.save()
    res.end()
})

router.post('/mega-forms', (req, res) => {
    const forms = req.body
    for (let form of forms) {
        let mf = new MegaForm(form)
        mf.save()
    }
    res.end()
})

router.get('/all-data', (req, res) => {
    MegaForm.find({}, function (err, forms) {
        res.send(forms)
    })
})

module.exports = router