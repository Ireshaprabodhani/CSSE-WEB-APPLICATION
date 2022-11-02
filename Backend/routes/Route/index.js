const routes = require("express").Router();
const route = require("../../controllers/Route.controller");

routes.post("/create-route", route.createRoute);
routes.get("/getAllRoutes", route.getAllRoute);
routes.delete("/DeleteByID/:id", route.DeleteByID);

// routes.get("/getAllTripHistory/:id", TripHistory.getTripHistoryDetailsByDate);
// routes.put("/approveTopListReq/:id", TopListRoutes.ApproveTopListReq);
// routes.get("/getApproedAllTopList", TopListRoutes.getApproedAllTopList);

module.exports = routes;
