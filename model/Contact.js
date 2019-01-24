const mongoose = require("mongoose");
const { Schema } = mongoose;

const ContactSchema = new Schema ({
  first_name: String,
  telephone: String 
});

module.exports = mongoose.model("Contact", ContactSchema);