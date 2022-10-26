const mongoose = require("mongoose");

const TripHistory = new mongoose.Schema(
  {
    trip_id: {type: String,trim: true,requried: true},
    date: {type: String,trim: true,requried: true},
    dates: {type: String,trim: true,requried: true},
    route: {type: String,trim: true,requried: true},
    total_fee: {type: String,trim: true,requried: true},
    top_ups_at_the_stations: {type: String,trim: true,requried: true},
    number_of_stops: {type: String,trim: true,requried: true},
    credit_deduction_status: {type: String,trim: true,requried: true}

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("TripHistory", TripHistory);
