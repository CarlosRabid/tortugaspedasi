let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const turtleSchema = new Schema({
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
});

const Turtle = mongoose.model("Turtle", turtleSchema)
module.exports = Turtle