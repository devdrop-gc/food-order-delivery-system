const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
  items: [{ name: String, price: Number, quantity: Number }],
  total: { type: Number, required: true },
  status: { type: String, enum: ['Ordered', 'Preparing', 'Out for Delivery', 'Delivered'], default: 'Ordered' },
  deliveryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Delivery' },
  paymentStatus: { type: String, enum: ['Pending', 'Completed', 'Refunded'], default: 'Pending' },
});

module.exports = mongoose.model('Order', orderSchema);