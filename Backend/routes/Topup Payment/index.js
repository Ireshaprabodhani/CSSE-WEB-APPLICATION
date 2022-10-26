const routes = require("express").Router();
const TopupRoutes = require("../../controllers/Topup.controller");

routes.post("/create-TopList", TopupRoutes.createTopList);
routes.put("/update-Topup/:id", TopupRoutes.UpdateTopPaymentByID);

routes.get("/getAllTopListbyID/:id", TopupRoutes.getTopUpDetailsByJobID);
// routes.put("/approveTopListReq/:id", TopListRoutes.ApproveTopListReq);
// routes.get("/getApproedAllTopList", TopListRoutes.getApproedAllTopList);
// routes.delete("/DeleteTopList/:id", TopListRoutes.DeleteByID);

module.exports = routes;
