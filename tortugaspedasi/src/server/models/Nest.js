let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const nestSchema = new Schema({
   form: {type: Schema.Types.ObjectId, ref: 'Form'},
   hasData: Boolean,
   eggCount: Number,
   layTime: Date,
   hatchEst: Date,
   rehomed: String,
   salvageable: String,
});

const Nest = mongoose.model("Nest", nestSchema)
module.exports = Nest