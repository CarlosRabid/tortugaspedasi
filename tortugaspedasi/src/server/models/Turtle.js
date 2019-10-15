let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const turtleSchema = new Schema({
   
});

const Turtle = mongoose.model("Turtle", turtleSchema)
module.exports = Turtle