const routes = require("express").Router();
const Topup = require("./Topup Payment/index");
const TripHistory = require("./Trip History/index");
const TimeTable = require("./TimeTable/index");
const Route = require("./Route/index");


routes.use("/TopupPayment", Topup);
routes.use("/TripHistory", TripHistory);
routes.use("/TimeTable", TimeTable);
routes.use("/Route", Route);




module.exports = routes;
