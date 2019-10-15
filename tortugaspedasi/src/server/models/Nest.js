let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const nestSchema = new Schema({
   
});

const Nest = mongoose.model("Nest", nestSchema)
module.exports = Nest