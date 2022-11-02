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
      account_id: "",
      account_name: "",
      card_id: "",
      
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
      account_id: this.state.account_id,
      account_name: this.state.account_name,
      card_id:this.state.card_id

    };

    console.log("classApplications Details: ", studentDetails);

    axios
      .post(`${APIURL}/TopupPayment//create-TopList`, studentDetails)
      .then((res) => {
        console.log("res", res);
        if (res.data.code === 200) {
          console.log("res.data.code", res.data.code);
          alert("Date Inserted !");
          window.location = "/viewBalnce";
        } else {
          alert(res.data.message);
          window.location.reload();
        }
      });
  }

  // componentDidMount() {
  //   axios
  //     .get(`${APIURL}/TopupPayment/getAllTopListbyID/${TopUpID}`)

  //     .then((response) => {
  //       this.setState({ TopUp: response.data.data });
  //       console.log("response ", this.state.TopUp);

  //       // this.setState({ latest_payment: this.state.TopUp.latest_payment });
  //       this.setState({
  //         latest_payment_date: this.state.TopUp.latest_payment_date,
  //       });
  //       this.setState({ current_balance: this.state.TopUp.current_balance });
  //     });
  // }

  render() {
    return (
      <>
        <div className="form_container">
          <div className="main-block">
            <div className="left-part">
              {/* <i className="fas fa-envelope" />
              <i className="fas fa-at" />
              <i className="fas fa-mail-bulk" /> */}
            </div>
            <div
              style={{
                height: "50%",
                display: "flex",
                flexDirection: "column",

                justifyContent: "flex-start",
                padding: "20px",
              }}
            >
              {" "}
              <h3
                style={{
                  // marginLeft: "230px",
                  color: "blue",
                }}
              >
                Top Up With Your Visa/ Master
              </h3>
              <form
                onSubmit={this.onSubmit}
                style={{
                  border: "2px solid grey",
                  borderRadius: "5px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "100%",
                  paddingBottom: "30px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <div className="info" style={{ width: "" }}>
                  <div
                    style={{
                      marginTop: "30px",
                      // marginLeft: "50px"
                    }}
                    className="input_div_iresha"
                  >
                    <lable
                      style={
                        {
                          // marginLeft: "20px",
                        }
                      }
                    >
                      Enter Account Id
                    </lable>
                    <input
                      className="account_id"
                      type="text"
                      name="account_id"
                      value={this.state.account_id}
                      onChange={this.onChange}
                      style={{
                        // marginLeft: "70px",
                        width: "900px",
                        height: "30px",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                  <div
                    style={{ marginTop: "20px" }}
                    className="input_div_iresha"
                  >
                    <label style={{}}>Enter Account Name</label>
                    <input
                      type="text"
                      name="account_name"
                      value={this.state.account_name}
                      onChange={this.onChange}
                      style={{
                        width: "900px",
                        height: "30px",
                        borderRadius: "5px",
                      }}
                    />
                  </div>

                  <div
                    style={{ marginTop: "20px" }}
                    className="input_div_iresha"
                  >
                    <label style={{}}>Card Id</label>
                    <input
                      type="text"
                      name="card_id"
                      value={this.state.card_id}
                      onChange={this.onChange}
                      style={{
                        width: "900px",
                        height: "30px",
                        borderRadius: "5px",
                      }}
                    />
                  </div>

                  <div
                    style={{ marginTop: "20px" }}
                    className="input_div_iresha"
                  >
                    <label style={{}}>Enter Latest Payment amount</label>
                    <input
                      type="text"
                      name="latest_payment"
                      value={this.state.latest_payment}
                      onChange={this.onChange}
                      style={{
                        width: "900px",
                        height: "30px",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                  <div
                    style={{ marginTop: "20px" }}
                    className="input_div_iresha"
                  >
                    <label style={{}}>Enter latest payment date</label>
                    <input
                      type="date"
                      name="latest_payment_date"
                      value={this.state.latest_payment_date}
                      onChange={this.onChange}
                      style={{
                        width: "900px",
                        height: "30px",
                        borderRadius: "5px",
                      }}
                    />
                  </div>

                  <div
                    style={{ marginTop: "20px" }}
                    className="input_div_iresha"
                  >
                    <label style={{}}>Enter Current Balance</label>
                    <input
                      type="text"
                      name="current_balance"
                      value={this.state.current_balance}
                      onChange={this.onChange}
                      style={{
                        width: "900px",
                        height: "30px",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  href="/"
                  style={{
                    width: "900px",
                    marginTop: "20px",
                    // marginLeft: "70px",
                    backgroundColor: "#10a8a9",
                    color: "white",
                    height: "35px",
                    borderRadius: "5px",
                  }}
                >
                  Top Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default AddCardDetails;
