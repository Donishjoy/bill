const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  driverName: {
    type: String,
    required: true,
  },
  // Other driver-related fields can be added here
});

const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;
