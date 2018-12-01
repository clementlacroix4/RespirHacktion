var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstname: String,
  lastname: String,
  password: String,
  email: String,
  phone: String,
  city: String,
});

module.exports = mongoose.model("User", UserSchema);
