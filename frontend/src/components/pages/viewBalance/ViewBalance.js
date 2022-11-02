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
      latest_payment: this.state.latest_payment,
      latest_payment_date: this.state.currentDate,
      current_balance: amountcount + current_balancecount,
      account_id: this.state.account_id,
      account_name: this.state.account_name,
      card_id: this.state.card_id,
    };

    console.log("classApplications Details: ", studentDetails);

    axios
      .post(`${APIURL}/TopupPayment/create-TopList`, studentDetails)
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
      .get(`${APIURL}/TopupPayment/getAllTopUp`)

      .then((response) => {
        this.setState({ TopUp: response.data.data });
        console.log("TopUp ", this.state.TopUp);
      });
  }

  render() {
    return (
      <>
        <div>
          <div
            className="manager_portal_container"
            style={{
              width: "100%",
              backgroundColor: "white",
              borderColor: "1px solid black",
              borderRadius: "10px",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            <div></div>
            <br></br>
            <div
              className="inside_table_first_col"
              style={{
                border: "1px solid grey",
                borderRadius: "",
                padding: "20px",
              }}
            ></div>
            <table
              class="table"
              style={{
                // marginTop: "40px",
                border: "1px solid grey",
                borderRadius: "10px",
              }}
            >
              <thead
                style={{
                  borderRadius: "10px",
                }}
              >
                <tr style={{ backgroundColor: "#10a8a9" }}>
                  <th scope="col" style={{ color: "#fff" }}>
                    Latest Payment Amount
                  </th>
                  <th scope="col" style={{ color: "#fff" }}>
                    Latest Payment Date
                  </th>
                  <th scope="col" style={{ color: "#fff" }}>
                    Current Balance
                  </th>
                  {/* <th scope="col" style={{ color: "#fff" }}></th>
                  <th scope="col" style={{ color: "#fff" }}></th> */}
                </tr>
              </thead>
              <tbody>
                {this.state.TopUp.length > 0 &&
                  this.state.TopUp.map((item, index) => (
                    <tr key={item.latest_payment}>
                      <th>{item.latest_payment}</th>
                      <td>{item.latest_payment_date}</td>
                      <td>{item.current_balance}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
export default ViewBalance;
