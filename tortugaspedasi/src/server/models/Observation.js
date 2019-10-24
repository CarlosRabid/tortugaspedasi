let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const observationSchema = new Schema({
    form: {type: Schema.Types.ObjectId, ref: 'Form'},
    date: Date,
    location: {type: Schema.Types.ObjectId, ref: 'Beach'},
    moonPhase: String,
    tide: String,
    comments: String,  
});

const Observation = mongoose.model("Observation", observationSchema)
module.exports = Observation