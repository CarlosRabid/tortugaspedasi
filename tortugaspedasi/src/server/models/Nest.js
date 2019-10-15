let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const nestSchema = new Schema({
   eggCount: Number,
   layTime: Date,
   hatchEst: Date,
   rehomed: Boolean,
   salvageable: Boolean
});

const Nest = mongoose.model("Nest", nestSchema)
module.exports = Nest