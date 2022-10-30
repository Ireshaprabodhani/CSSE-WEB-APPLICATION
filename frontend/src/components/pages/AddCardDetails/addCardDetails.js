import React from 'react'
import './addcardDetails.css'
import axios from 'axios'
import {APIURL} from '../../API/environment'
import { Component } from 'react'
import { Button } from '@mui/material'
import { width } from '@mui/system'
import NavBarClient from '../NavBarClient/NavBarClient'
import Sidebar from '../sidebar/Sidebar'

const TopUpID = "615b62836b077090fc9c11e9";


class AddCardDetails extends Component {

  
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
        <div
          className="add_carddetails_container"
          style={{
            // marginLeft: "400px",
            width: "100%",
          }}
        >
        
          <form
            style={{
              width: "100%",
              height: "500px",
            }}
          >
            <h3
              style={{
                marginLeft: "120px",
              }}
            >
              Top up your VISA / MASTER Card
            </h3>
            <div
              className="card_number"
              style={{
                marginTop: "30px",
              }}
            >
              <label>Card Number</label>
              <input
                className="input_class_number"
                type="number"
                placeholder="Add card Number"
                value={this.state.cardnumber}
                onChange={this.onChange}
                required
                style={{
                  width: "450px",
                  marginLeft: "10px",
                }}
              ></input>
            </div>

            <div
              className="card_number"
              style={{
                marginTop: "10px",
              }}
            >
              <label>Card Name</label>
              <input
                className="input_card_name"
                type="text"
                placeholder="Add card Name"
                required
                style={{
                  width: "450px",
                  marginLeft: "25px",
                }}
                value={this.state.cardname}
                onChange={this.onChange}
              ></input>
            </div>

            <div
              className="card_number"
              style={{
                marginTop: "10px",
              }}
            >
              <label>Amount</label>
              <input
                className="input_card_name"
                type="number"
                placeholder="Enter amount"
                required
                style={{
                  width: "450px",
                  marginLeft: "45px",
                }}
                value={this.state.amount}
                onChange={this.onChange}
              ></input>
            </div>

            <div
              className="card_number"
              style={{
                marginTop: "10px",
              }}
            >
              <label>Expire date</label>
              <input
                className="input_card_name"
                type="date"
                placeholder="Enter amount"
                required
                style={{
                  width: "200px",
                  marginLeft: "25px",
                }}
                value={this.state.expdate}
                onChange={this.onChange}
              ></input>

              <label
                style={{
                  marginLeft: "10px",
                }}
              >
                CVV
              </label>
              <input
                className="input_card_name"
                type="number"
                placeholder="Enter amount"
                required
                style={{
                  width: "200px",
                  marginLeft: "10px",
                }}
                value={this.state.cvv}
                onChange={this.onChange}
              ></input>
            </div>

            <button
              style={{
                width: "450px",
                marginLeft: "100px",
                marginTop: "10px",
              }}
              onClick={this.onSubmit}
            >
              {" "}
              Top up
            </button>
          </form>
        </div>
      </>
    );
  }
}
export default AddCardDetails;
