const mongoose = require("mongoose");

const TimeTableSchema = new mongoose.Schema(
  {
    route: {type: String,trim: true,requried: true},
    route_path: {type: String,trim: true,requried: true},
    dateAndtime: {type: String,trim: true,requried: true},
    start: {type: String,trim: true,requried: true},
    destination: {type: String,trim: true,requried: true},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("TimeTable", TimeTableSchema);
