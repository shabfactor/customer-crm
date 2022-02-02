const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const quoteSchema = new mongoose.Schema({
  firstname: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
  },
  lastname: {
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
  quantity: {
    type: Number,
  },

  request: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Quote", quoteSchema);
