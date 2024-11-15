const mongoose = require('mongoose');

const BunkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  googleMapLocation: {
    type: String,
    required: true
  },
  availableSlots: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Bunk', BunkSchema);
