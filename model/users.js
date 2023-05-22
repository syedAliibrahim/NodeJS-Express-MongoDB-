const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema= new Schema({
    firstName: String,
    lastName: String,
    Description: String,
    age: Number,
    gender: String,
    Activity:String,
    thumbnail: String ,
    images: [ String]
})
const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel