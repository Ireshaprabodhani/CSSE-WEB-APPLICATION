// This is Route Controller

const Route = require("../models/Route.model");
const messages = require("../messages/messages");


const RouteController = {
  /*
  Create New Route
  */
  createRoute: async (req, res) => {
    try {
      const { routeId, departure, arrival, fair } = req.body;

      const newRoute = new Route({
        routeId,
        departure,
        arrival,
        fair,
      });

      console.log("newRoute Details : ", newRoute);
      await newRoute.save();

      return res.status(200).json({
        code: messages.SuccessCode,
        success: messages.Success,
        status: messages.SuccessStatus,
        data: newRoute,
        message: "new Route is created successfully.",
      });
    } catch (err) {
      return res.status(500).json({
        code: messages.InternalCode,
        success: messages.NotSuccess,
        status: messages.InternalStatus,
        message: err.message,
      });
    }
  },
 
  // Get All Routes content
  getAllRoute: async (req, res) => {
    await Route.find()
      .then((data) => {
        const count = data.length;
        res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          data: data,
          message: "All Route are Received " + count,
        });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  },

  // Routes delete using route ID
  DeleteByID: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        console.log("Stage 01");
        const { isOpen } = req.body;

        const Job = await Route.findByIdAndDelete(req.params.id);

        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: Job,
          message: "Route is deleted!",
        });
      }
    } catch (err) {
      return res.status(500).json({
        code: messages.InternalCode,
        success: messages.NotSuccess,
        status: messages.InternalStatus,
        message: err.message,
      });
    }
  },
};
module.exports = RouteController;