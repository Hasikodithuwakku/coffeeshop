const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    default: 1
  }
});

const cartSchema = new mongoose.Schema({
  userId: {
    type: String, // For now, use a string (could be session ID or user ID)
    required: true
  },
  items: [cartItemSchema]
}, { timestamps: true });

module.exports = mongoose.model('Cart', cartSchema);
