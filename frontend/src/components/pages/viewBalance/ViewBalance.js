import React from "react";
import "./ViewBalance.css";
import axios from "axios";
import { APIURL } from "../../API/environment";
import { Component } from "react";
import { Button, Card } from "@mui/material";
import { shadows, width } from "@mui/system";
import NavBarClient from "../NavBarClient/NavBarClient";
import Sidebar from "../sidebar/Sidebar";

const TopUpID = "615b62836b077090fc9c11e9";

class ViewBalance extends Component {
  constructor(props) {
    super(props);
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

    this.state = {
      currentDate: date,
      TopUp: [],
      cardtype: "Credit",
      cardnumber: "",
      cardname: "",
      expdate: "",
      cvv: "",
      amount: "",
      latest_payment: "",
      latest_payment_date: "",
      current_balance: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onGenderOptionSelected(e) {
    this.state.items = e.label;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    const amountcount = Number(this.state.current_balance);
    const current_balancecount = Number(this.state.amount);

    const studentDetails = {
      latest_payment: this.state.amount,
      latest_payment_date: this.state.currentDate,
      current_balance: amountcount + current_balancecount,
    };

    console.log("classApplications Details: ", studentDetails);

    axios
      .put(`${APIURL}/TopupPayment/update-Topup/${TopUpID}`, studentDetails)
      .then((res) => {
        console.log("res", res);
        if (res.data.code === 200) {
          console.log("res.data.code", res.data.code);
          alert("Date Inserted !");
          window.location.reload();
        } else {
          alert(res.data.message);
          window.location.reload();
        }
      });
  }

  componentDidMount() {
    axios
      .get(`${APIURL}/TopupPayment/getAllTopListbyID/${TopUpID}`)

      .then((response) => {
        this.setState({ TopUp: response.data.data });
        console.log("response ", this.state.TopUp);

        this.setState({ latest_payment: this.state.TopUp.latest_payment });
        this.setState({
          latest_payment_date: this.state.TopUp.latest_payment_date,
        });
        this.setState({ current_balance: this.state.TopUp.current_balance });
      });
  }

  render() {
    return (
      <>
        <Card
          className="add_carddetails_container"
          style={{
            // marginLeft: "400px",
            width: "70%",
            height: "70%",
            backgroundColor: "white",
          }}
        >
          <div className="view_balance_title">
            <h3>View Balance</h3>
          </div>
          <div className="latest_payment">
            <label>Latest Payment :</label>
            <span>{this.state.latest_payment}</span>
          </div>
          <div className="latest_payment">
            <label>Latest Payment Date :</label>
            <span>{this.state.latest_payment_date}</span>
          </div>
          <div className="latest_payment">
            <label>Current Balance :</label>
            <span>{this.state.current_balance}</span>
          </div>
        </Card>
      </>
    );
  }
}
export default ViewBalance;
