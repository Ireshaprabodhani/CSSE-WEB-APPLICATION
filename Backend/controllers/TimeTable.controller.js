const TimeTable = require("../models/TimeTable.model");
const messages = require("../messages/messages");

const TopListController = {
  createTimeTable: async (req, res) => {

    try {
      const {
        route,
        route_path,
        dateAndtime,
        start,
        destination,

      } = req.body;


      const newTimeTable = new TimeTable({
        route,
        route_path,
        dateAndtime,
        start,
        destination,
      });

      console.log("newTimeTable Details : ", newTimeTable);
      await newTimeTable.save();

      return res.status(200).json({
        code: messages.SuccessCode,
        success: messages.Success,
        status: messages.SuccessStatus,
        data: newTimeTable,
        message: "newTimeTable is created successfully.",
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

  getAllTimeTable: async (req, res) => {
    await TimeTable.find()
      .then((data) => {
        const count = data.length;
        res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          data: data,
          message: "All TimeTable are Received " + count,
        });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  },

  getTimeTableByRoute: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const TripHistoryDetails = await TimeTable.find({route: req.params.id });

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

  DeleteByID: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        console.log("Stage 01");
        const {
          isOpen

        } = req.body;


        const Job = await TimeTable.findByIdAndDelete(req.params.id);

        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: Job,
          message: "TimeTable is deleted!",
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

  // getTopUpDetailsByJobID: async (req, res) => {
  //   try {
  //     if (req.params && req.params.id) {
  //       const JobDetails = await TopList.findById({ _id: req.params.id });

  //       return res.status(200).json({
  //         code: messages.SuccessCode,
  //         success: messages.Success,
  //         status: messages.SuccessStatus,
  //         data: JobDetails,
  //         message: "The Topup detail recieved",
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
