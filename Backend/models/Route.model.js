const mongoose = require("mongoose");

const RouteSchema = new mongoose.Schema(
  {
    routeId: { type: String, trim: true, requried: true },
    departure: { type: String, trim: true, requried: true },
    arrival: { type: String, trim: true, requried: true },
    fair: { type: String, trim: true, requried: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Route", RouteSchema);
