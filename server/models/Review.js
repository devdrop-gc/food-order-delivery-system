const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: { type: String },
  response: { type: String },
});

module.exports = mongoose.model('Review', reviewSchema);