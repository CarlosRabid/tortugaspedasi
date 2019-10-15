let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const observationSchema = new Schema({
   
});

const Observation = mongoose.model("Observation", observationSchema)
module.exports = Observation