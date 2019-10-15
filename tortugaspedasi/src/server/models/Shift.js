let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const personSchema = new Schema({
   firstName: String,
   lastName: String,
   date: Date
});

const Person = mongoose.model("Nest", personSchema)
module.exports = Person