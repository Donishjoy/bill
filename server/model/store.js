const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  storeName: {
    type: String,
    required: true,
  },
  // Other store-related fields can be added here
});

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;
