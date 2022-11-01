import React, { Component } from "react";
import "./main.css";
import axios from "axios";
import { APIURL } from "../../API/environment";
import { color } from "@mui/system";

const TopUpID = "615b62836b077090fc9c11e9";

class AddStudent extends Component {
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
      search_date: "",
      HistoryTrip: [],

      trip_id: "",
      date: "",
      route: "",
      total_fee: "",
      top_ups_at_the_stations: "",
      number_of_stops: "",
      credit_deduction_status: "",
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

    const TripHistoryDetails = {
      search_date: this.state.search_date,
      trip_id: this.state.trip_id,
      date: this.state.date,
      route: this.state.route,
      total_fee: this.state.total_fee,
      top_ups_at_the_stations: this.state.top_ups_at_the_stations,
      number_of_stops: this.state.number_of_stops,
      credit_deduction_status: this.state.credit_deduction_status,
    };

    console.log("TripHistory Details: ", TripHistoryDetails);

    axios
      .post(`${APIURL}/TripHistory/create-TripHistory`, TripHistoryDetails)
      .then((res) => {
        console.log("res", res);
        if (res.data.code === 200) {
          console.log("res.data.code", res.data.code);
          alert("Date Inserted !");
          window.location = "/tripHistory";
        } else {
          alert(res.data.message);
          window.location.reload();
        }
      });
  }

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
            <form
              onSubmit={this.onSubmit}
              // style={{ width: "1000px", marginLeft: "-700px" }}
            >
              <h3
                style={{
                  marginLeft: "230px",
                  color: "blue",
                }}
              >
                Add Trip History
              </h3>
              <div className="" style={{ width: "" }}>
                <div style={{ marginTop: "20px", marginLeft: "50px" }}>
                  <label style={{ marginLeft: "20px" }}>Enter Trip Id</label>
                  <input
                    type="text"
                    name="trip_id"
                    value={this.state.trip_id}
                    onChange={this.onChange}
                    style={{ marginLeft: "95px", width: "300px" }}
                  />
                </div>

                <div style={{ marginTop: "20px", marginLeft: "50px" }}>
                  <label style={{ marginLeft: "20px" }}>Enter Date</label>
                  <input
                    type="text"
                    name="date"
                    value={this.state.date}
                    onChange={this.onChange}
                    style={{ marginLeft: "105px", width: "300px" }}
                  />
                </div>
                <div style={{ marginTop: "20px", marginLeft: "50px" }}>
                  <label style={{ marginLeft: "20px" }}>Enter Route</label>
                  <input
                    type="text"
                    name="route"
                    value={this.state.route}
                    onChange={this.onChange}
                    style={{ marginLeft: "95px", width: "300px" }}
                  />
                </div>

                <div style={{ marginTop: "20px", marginLeft: "50px" }}>
                  <label style={{ marginLeft: "20px" }}>Total Fee</label>
                  <input
                    type="text"
                    name="state.total_fee"
                    value={this.state.total_fee}
                    onChange={this.onChange}
                    style={{ marginLeft: "115px", width: "300px" }}
                  />
                </div>

                <div style={{ marginTop: "20px", marginLeft: "50px" }}>
                  <label style={{ marginLeft: "20px" }}>
                    Top Up at the stations
                  </label>
                  <input
                    type="text"
                    name="top_ups_at_the_stations"
                    value={this.state.top_ups_at_the_stations}
                    onChange={this.onChange}
                    style={{ marginLeft: "30px", width: "300px" }}
                  />
                </div>
                <div style={{ marginTop: "20px", marginLeft: "50px" }}>
                  <label style={{ marginLeft: "20px" }}>
                    Enter Number of Stops
                  </label>
                  <input
                    type="number"
                    name="number_of_stops"
                    value={this.state.number_of_stops}
                    onChange={this.onChange}
                    style={{ marginLeft: "25px", width: "300px" }}
                  />
                </div>

                <div style={{ marginTop: "20px", marginLeft: "50px" }}>
                  <label style={{ marginLeft: "20px" }}>
                    Credit deduction Status
                  </label>
                  <input
                    type="number"
                    name="credit_deduction_status"
                    value={this.state.credit_deduction_status}
                    onChange={this.onChange}
                    style={{ marginLeft: "20px", width: "300px" }}
                  />
                </div>
              </div>

              <button
                type="submit"
                href="/"
                style={{
                  width: "480px",
                  marginTop: "20px",
                  marginLeft: "70px",
                  backgroundColor: "blue",
                  color: "white",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default AddStudent;
