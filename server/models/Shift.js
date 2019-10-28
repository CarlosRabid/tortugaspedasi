let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const shiftSchema = new Schema({
   form: {type: Schema.Types.ObjectId, ref: 'Form'},
   firstName: String,
   lastName: String,
   date: String,
});

const Shift = mongoose.model("Shift", shiftSchema)
module.exports = Shift