let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const nestSchema = new Schema({
   hasData: Boolean,
   form: {type: Schema.Types.ObjectId, ref: 'Form'},
   hasData: Boolean,
   eggCount: Number,
   layTime: String,
   hatchEst: String,
   rehomed: String,
   salvageable: String,
});

const Nest = mongoose.model("Nest", nestSchema)
module.exports = Nest