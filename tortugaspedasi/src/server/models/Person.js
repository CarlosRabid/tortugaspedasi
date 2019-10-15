let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const personSchema = new Schema({
   
});

const Person = mongoose.model("Nest", personSchema)
module.exports = Person