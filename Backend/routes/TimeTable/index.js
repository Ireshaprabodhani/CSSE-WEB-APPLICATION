const routes = require("express").Router();
const timetable = require("../../controllers/TimeTable.controller");

routes.post("/create-timetable", timetable.createTimeTable);  
routes.get("/GetAllTimeTable", timetable.getAllTimeTable);
routes.get("/getDetailsByRoute/:id", timetable.getTimeTableByRoute);

// routes.get("/getAllTripHistory/:id", TripHistory.getTripHistoryDetailsByDate);
// routes.put("/approveTopListReq/:id", TopListRoutes.ApproveTopListReq);
// routes.get("/getApproedAllTopList", TopListRoutes.getApproedAllTopList);
routes.delete("/DeleteByID/:id", timetable.DeleteByID);

module.exports = routes;
