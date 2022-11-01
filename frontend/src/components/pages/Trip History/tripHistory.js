import React, { Component } from "react";
import './main.css'
import axios from "axios";




const initialState = {
  search_date: "",
  HistoryTrip: [],

  trip_id: "",
  date: "",
  route: "",
  total_fee: "",
  top_ups_at_the_stations: "",
  number_of_stops: "",
  credit_deduction_status: ""

};

class tripHistory extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;

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

    const dateId = this.state.search_date.replace("/", "");
    const dateIdd = dateId.replace("/", "");


    let studentDetails = {

      search_date: dateIdd

    };



    console.log("classApplications Details: ", studentDetails);

    axios
      .get(`http://localhost:8001/TripHistory/getAllTripHistory/${dateIdd}`)
      .then((res) => {
        console.log("res", res);
        if (res.data.code === 200) {
          this.setState({ HistoryTrip: res.data.data });
          console.log("HistoryTrip ", this.state.HistoryTrip[0]);



          this.setState({ date: this.state.HistoryTrip[0].dates });
          this.setState({ route: this.state.HistoryTrip[0].route });
          this.setState({ total_fee: this.state.HistoryTrip[0].total_fee });
          this.setState({ top_ups_at_the_stations: this.state.HistoryTrip[0].top_ups_at_the_stations });
          this.setState({ number_of_stops: this.state.HistoryTrip[0].number_of_stops });
          this.setState({ credit_deduction_status: this.state.HistoryTrip[0].credit_deduction_status });
          this.setState({ trip_id: this.state.HistoryTrip[0].trip_id });

        } else {
          alert(res.data.message)

        }
      });


  }

  render() {


    return (
      <>
        <div className="trip_history_container">
          {/* <div>
            <span className="v328_44">My Trips</span>
          </div> */}
          <div className="name_trip_history">
            <h3>Trip History</h3>
          </div>
          <div className="input_date" onClick={this.onSubmit}>
            <span>Input date:</span>
            <input
              type="text"
              id="fname"
              className="date_input"
              name="search_date"
              value={this.state.search_date}
              onChange={this.onChange}
              required
              style={{
                width: "400px",
                marginLeft: "120px",
                borderRadius: "12px",
              }}
            />
            <div className="search" onClick={this.onSubmit}></div>
            <div className="date"></div>
          </div>

          <div>
            <span className="trip_id">Trip ID : </span>
            <span className="">{this.state.trip_id}</span>
          </div>
          <div style={{ marginTop: "20px" }}>
            <span className="trip_id">Date : </span>
            <span className="">{this.state.date}</span>
          </div>
          <div style={{ marginTop: "20px" }}>
            <span className="trip_id">Route : </span>
            <span className="">{this.state.route}</span>
          </div>
          <div style={{ marginTop: "20px" }}>
            <span className="trip_id">Total Fee : </span>
            <span className="">{this.state.total_fee}</span>
          </div>
          <div style={{ marginTop: "20px" }}>
            <span className="trip_id">Top Ups at the stations : </span>
            <span className="">{this.state.top_ups_at_the_stations}</span>
          </div>
          <div style={{ marginTop: "20px" }}>
            <span className="trip_id">Number of Stops : </span>
            <span className="">{this.state.number_of_stops}</span>
          </div>
          <div style={{ marginTop: "20px" }}>
            <span className="trip_id">Credit Deduction Status : </span>
            <span className="">{this.state.credit_deduction_status}</span>
          </div>
          <button
            style={{ marginTop: "20px", width: "200px", marginLeft: "500px" }}
          >
            Print
          </button>

          {/* <table
            class="table"
            style={{ marginTop: "40px", borderRadius: "5PX" }}
          >
            <thead
              style={{
                backgroundColor: "lightblue",
              }}
            >
              <tr>
                <th scope="col">Trip Id</th>
                <th scope="col">Date</th>
                <th scope="col">Route</th>
                <th scope="col">Total Fee </th>
                <th scope="col">Top Ups at the stations </th>
                <th scope="col">Number of Stops </th>
                <th scope="col">Number of Stops </th>
                <th scope="col">Credit Deduction Status </th>
              </tr>
            </thead>
            <tbody>
              {this.state.history.length > 0 &&
                this.state.history.map((item, index) => (
                  <tr key={item.trip_id}>
                    <th>{item.date}</th>
                    <td>{item.route}</td>
                    <td> {item.total_fee}</td>
                    <td> {item.top_ups_at_the_stations}</td>
                    <td> {item.number_of_stops}</td>
                    <td> {item.credit_deduction_status}</td>
                    <td> {item.credit_deduction_status}</td>
                  </tr>
                ))}
            </tbody>
          </table> */}
        </div>
      </>
    );

  }
}


export default tripHistory;