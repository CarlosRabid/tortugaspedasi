const mongoose = require('mongoose')
const Schema = mongoose.Schema

const megaFormSchema = new Schema({
    shift: {
        firstName: String,
        lastName: String,
    },
    observation: {
        date: Date,
        location: String,
        latitude: Number,
        longitude: Number,
        moonPhase: String,
        tide: String,
        comments: String,
    },
    turtle: {
        hasData: Boolean,
        species: String,
        gender: String,
        condition: {
            status: String,
            stage: String
        },
        dimensions: {
            plain: {
                length: Number,
                width: Number
            },
            curve: {
                length: Number,
                width: Number
            }
        },
        markings: {
            rightSide: String,
            leftSide: String
        }
    },
    nest: {
        hasData: Boolean,
        eggCount: Number,
        layTime: String,
        hatchEst: String,
        rehomed: String,
        salvageable: String,
    }
})

const MegaForm = mongoose.model("MegaForm", megaFormSchema)
module.exports = MegaForm