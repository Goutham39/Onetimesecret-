const mongoose = require('mongoose');

const secretSchema = new mongoose.Schema({
  message: { type: String, required: true },
  accessed: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Secret', secretSchema);
