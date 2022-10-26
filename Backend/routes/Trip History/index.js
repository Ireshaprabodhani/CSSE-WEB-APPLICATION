const routes = require("express").Router();
const TripHistory = require("../../controllers/TripHistory..controller");

routes.post("/create-TripHistory", TripHistory.createTripHistory);
// routes.put("/update-Topup/:id", TopupRoutes.UpdateTopPaymentByID);

routes.get("/getAllTripHistory/:id", TripHistory.getTripHistoryDetailsByDate);
// routes.put("/approveTopListReq/:id", TopListRoutes.ApproveTopListReq);
// routes.get("/getApproedAllTopList", TopListRoutes.getApproedAllTopList);
// routes.delete("/DeleteTopList/:id", TopListRoutes.DeleteByID);

module.exports = routes;
