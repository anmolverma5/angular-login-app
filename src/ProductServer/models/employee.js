const mongoose = require("mongoose");

var Employee = mongoose.model("products", {
  _id: { type: Number },
  title: { type: String },
  price: { type: Number },
  currency: { type: String },
  description: { type: String },
  image: { type: String },

  // name: { type: String },
  // position: { type: String },
  // office: { type: String },
  // salary: { type: Number }
});

module.exports = { Employee };
