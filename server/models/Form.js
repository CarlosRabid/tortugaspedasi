let mongoose = require('mongoose');
let Schema = mongoose.Schema;


const formSchema = new Schema({
    shift: { type: Schema.Types.ObjectId, ref: 'Shift' },
    observation: 

    { type: Schema.Types.ObjectId, ref: 'Observation' },

    
    turtle: { type: Schema.Types.ObjectId, ref: 'Turtle' },
    nest: { type: Schema.Types.ObjectId, ref: 'Nest' }
});

const Form = mongoose.model("Form", formSchema)
module.exports = Form