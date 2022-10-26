const mongoose = require("mongoose");

const TopListSchema = new mongoose.Schema(
  {
    account_id: {type: String,trim: true,requried: true},
    account_name: {type: String,trim: true,requried: true},
    card_id: {type: String,trim: true,requried: true},
    latest_payment: {type: String,trim: true,requried: true},
    latest_payment_date: {type: String,trim: true,requried: true},
    current_balance: {type: String,trim: true,requried: true},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("TopupPayment", TopListSchema);
