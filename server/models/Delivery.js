const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  status: { type: String, enum: ['Assigned', 'Out for Delivery', 'Delivered'], default: 'Assigned' },
  location: { type: String, default: 'Simulated Location' },
});

module.exports = mongoose.model('Delivery', deliverySchema);