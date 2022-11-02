const routes = require("express").Router();
const TopupPayment = require("../../controllers/Topup.controller");

routes.post("/create-TopList", TopupPayment.createTopList);
routes.put("/update-Topup/:id", TopupPayment.UpdateTopPaymentByID);

routes.get("/getAllTopListbyID/:id", TopupPayment.getTopUpDetailsByJobID);
// routes.put("/approveTopListReq/:id", TopListRoutes.ApproveTopListReq);
// routes.get("/getApproedAllTopList", TopListRoutes.getApproedAllTopList);
// routes.delete("/DeleteTopList/:id", TopListRoutes.DeleteByID);

module.exports = routes;
