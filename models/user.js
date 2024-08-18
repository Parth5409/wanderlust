const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  // PassportLocalMongoose adds username and password hashing and salting automatically
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
