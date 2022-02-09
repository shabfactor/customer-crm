const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const quoteSchema = new mongoose.Schema({
  firstName: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,    
    lowercase: true,
    trim: true,
    required: true,
  },
  date: {
   type: String,
   required: true,
  },
  phone: {
   type: String,
   required: true,
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
  },
  product: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,

  },
  quantity: {
    type: Number,
   required: true,
  },
  request: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Quote", quoteSchema);
