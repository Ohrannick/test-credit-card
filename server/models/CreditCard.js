const { Schema, model } = require('mongoose');

const CreditCard = new Schema({
  cardNumber: { type: Number, required: true, unique: true },
  dateExp: { type: String, required: true },
  cvv: { type: String, required: true },
  amount: { type: Number, required: true },
});

module.exports = model('CreditCard', CreditCard);
