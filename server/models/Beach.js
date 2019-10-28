let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const beachSchema = new Schema({
   form: {type: Schema.Types.ObjectId, ref: 'Form'},
   name: String,
   latitude: Number,
   longitude: Number
});

const Beach = mongoose.model("Beach", beachSchema)
module.exports = Beach