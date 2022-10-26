const TripHistory = require("../models/TripHistory.model");
const messages = require("../messages/messages");

const TopListController = {
  createTripHistory: async (req, res) => {

    try {
      const {
        trip_id,
        date,
        dates,
        route,
        total_fee,
        top_ups_at_the_stations,
        number_of_stops,
        credit_deduction_status

      } = req.body;


      const newTripHistory = new TripHistory({
        trip_id,
        dates,
        date,
        route,
        total_fee,
        top_ups_at_the_stations,
        number_of_stops,
        credit_deduction_status
      });

      console.log("TripHistory Details : ", newTripHistory);
      await newTripHistory.save();

      return res.status(200).json({
        code: messages.SuccessCode,
        success: messages.Success,
        status: messages.SuccessStatus,
        data: newTripHistory,
        message: "TripHistory is created successfully.",
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
  // getAllTopList: async (req, res) => {
  //   await TopList.find({ IsApprove: 0 })
  //     .then((data) => {
  //       const count = data.length;
  //       res.status(200).json({
  //         code: 200,
  //         success: true,
  //         status: "OK",
  //         data: data,
  //         message: "All TopList are Received " + count,
  //       });
  //     })
  //     .catch((error) => {
  //       res.status(500).send({ error: error.message });
  //     });
  // },

  // getApproedAllTopList: async (req, res) => {
  //   await TopList.find({ IsApprove: 1 })
  //     .then((data) => {
  //       const count = data.length;
  //       res.status(200).json({
  //         code: 200,
  //         success: true,
  //         status: "OK",
  //         data: data,
  //         message: "All Approved TopList are Received " + count,
  //       });
  //     })
  //     .catch((error) => {
  //       res.status(500).send({ error: error.message });
  //     });
  // },

  // ApproveTopListReq: async (req, res) => {
  //   try {
  //     if (req.params && req.params.id) {
  //       console.log("Stage 01");
  //       const { IsApprove } = req.body;

  //       await TopList.findByIdAndUpdate(req.params.id, { IsApprove });

  //       const TopListReq = await TopList.findById(req.params.id);

  //       return res.status(200).json({
  //         code: messages.SuccessCode,
  //         success: messages.Success,
  //         status: messages.SuccessStatus,
  //         data: TopListReq,
  //         message: "Approved",
  //       });
  //     }
  //   } catch (err) {
  //     return res.status(500).json({
  //       code: messages.InternalCode,
  //       success: messages.NotSuccess,
  //       status: messages.InternalStatus,
  //       message: err.message,
  //     });
  //   }
  // },

  getTripHistoryDetailsByDate: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const TripHistoryDetails = await TripHistory.find({date: req.params.id });

        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: TripHistoryDetails,
          message: "The TripHistory detail recieved",
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

  // UpdateTopPaymentByID: async (req, res) => {
  //   try {
  //     if (req.params && req.params.id) {
  //       console.log("Stage 01");
  //       const {
  //         latest_payment,
  //         latest_payment_date,
  //         current_balance,

  //       } = req.body;

  //       await TopList.findByIdAndUpdate(req.params.id, {
  //         latest_payment,
  //         latest_payment_date,
  //         current_balance,
  //       });

  //       const Jobs = await TopList.findById(req.params.id);

  //       return res.status(200).json({
  //         code: messages.SuccessCode,
  //         success: messages.Success,
  //         status: messages.SuccessStatus,
  //         data: Jobs,
  //         message: "TopUp deatils is Updated.",
  //       });
  //     }
  //   } catch (err) {
  //     return res.status(500).json({
  //       code: messages.InternalCode,
  //       success: messages.NotSuccess,
  //       status: messages.InternalStatus,
  //       message: err.message,
  //     });
  //   }
  // },
}

module.exports = TopListController;
