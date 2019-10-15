let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const userLoginSchema = new Schema({
   
});

const UserLogin = mongoose.model("UserLogin", userLoginSchema)
module.exports = UserLogin