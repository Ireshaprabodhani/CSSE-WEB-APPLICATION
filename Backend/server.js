const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8001;
const URI = process.env.MONGO_URL;
mongoose.connect(
  URI,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to the mongo db");
  }
);  

app.use("/", routes);
app.route("/").get((req, res) => {
  res.send("CSSE-WEB");
});

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT ${PORT}`);
});