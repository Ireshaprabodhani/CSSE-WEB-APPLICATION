const TopList = require("../models/Topup.model");
const messages = require("../messages/messages");

const TopListController = {
  createTopList: async (req, res) => {

    try {
      const {
        account_id,
        account_name,
        card_id,
        latest_payment,
        latest_payment_date,
        current_balance,

      } = req.body;


      const newTopList = new TopList({
        account_id,
        account_name,
        card_id,
        latest_payment,
        latest_payment_date,
        current_balance,
      });

      console.log("TopList Details : ", newTopList);
      await newTopList.save();

      return res.status(200).json({
        code: messages.SuccessCode,
        success: messages.Success,
        status: messages.SuccessStatus,
        data: newTopList,
        message: "TopList is created successfully.",
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

  getTopUpDetailsByJobID: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const JobDetails = await TopList.findById({ _id: req.params.id });

        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: JobDetails,
          message: "The Topup detail recieved",
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

  UpdateTopPaymentByID: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        console.log("Stage 01");
        const {
          latest_payment,
          latest_payment_date,
          current_balance,

        } = req.body;

        await TopList.findByIdAndUpdate(req.params.id, {
          latest_payment,
          latest_payment_date,
          current_balance,
        });

        const Jobs = await TopList.findById(req.params.id);

        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: Jobs,
          message: "TopUp deatils is Updated.",
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
}

module.exports = TopListController;
