let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const userLoginSchema = new Schema({
   userName: String,
   password: String,
   date: Date
});

const UserLogin = mongoose.model("UserLogin", userLoginSchema)
module.exports = UserLogin