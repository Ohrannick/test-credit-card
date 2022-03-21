const { Schema, model } = require('mongoose');

const Card = new Schema({
  cardNumber: { type: String, required: true },
  dateExp: { type: String, required: true },
  cvv: { type: String, required: true },
  amount: { type: String, required: true },
});

module.exports = model('Card', Card);
