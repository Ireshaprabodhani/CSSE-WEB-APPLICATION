import React, { Component } from "react";
import './main.css'
import axios from "axios";


 


class tripHistory extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  state = {
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
      search_date: dateIdd,
    };

    console.log("classApplications Details: ", studentDetails);

    axios
      .get(`http://localhost:8001/TripHistory/getAllTripHistory/${dateId}`)
      .then((res) => {
        console.log("res", res);
        if (res.data.code === 200) {
          this.setState({ HistoryTrip: res.data.data });
          console.log("HistoryTrip ", this.state.HistoryTrip[0]);

          this.setState({ date: this.state.HistoryTrip[0].dates });
          this.setState({ route: this.state.HistoryTrip[0].route });
          this.setState({ total_fee: this.state.HistoryTrip[0].total_fee });
          this.setState({
            top_ups_at_the_stations:
              this.state.HistoryTrip[0].top_ups_at_the_stations,
          });
          this.setState({
            number_of_stops: this.state.HistoryTrip[0].number_of_stops,
          });
          this.setState({
            credit_deduction_status:
              this.state.HistoryTrip[0].credit_deduction_status,
          });
          this.setState({ trip_id: this.state.HistoryTrip[0].trip_id });
        } else {
          alert(res.data.message);
        }
      });
  }
  componentDidMount() {
    axios
      .get(`http://localhost:8001/TripHistory/getAllTripHistory`)

      .then((response) => {
        this.setState({ HistoryTrip: response.data.data });
        console.log("HistoryTrip ", this.state.HistoryTrip);
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
            <div>
              {/* <span
                className=""
                style={{ marginLeft: "80px", marginTop: "20px" }}
              >
                Selected route :{" "}
              </span>
              <span className="">{this.state.route} </span> */}

              <input
                type="date"
                id="fname"
                placeholder="Enter route"
                className=""
                style={{
                  marginTop: "20px",
                  paddingLeft: "50px",
                  width: "300px",
                  borderRadius: "5px",
                }}
                name="search_date"
                value={this.state.search_date}
                onChange={this.onChange}
                required
              />
              {/* 
              <button className="btn_report" style={{ marginLeft: "400px" }}>
                Generate Report
              </button> */}
            </div>
            <br></br>
            <div
              className="inside_table_first_col"
              style={{
                border: "1px solid grey",
                borderRadius: "",
                padding: "20px",
              }}
            >
              <input
                type="text"
                className="input_class"
                onClick={this.onSubmit}
                placeholder="&#9906; search"
                style={{ borderRadius: "5px" }}
              />
              {/* <a href="/AddTimeTable">
                <button
                  className="add_new"
                  type="button"
                  style={{ border: "1px solid gray", borderRadius: "5px" }}
                >
                  + Add New
                </button>
              </a> */}
            </div>
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
                    Trip Id
                  </th>
                  <th scope="col" style={{ color: "#fff" }}>
                    Date
                  </th>
                  <th scope="col" style={{ color: "#fff" }}>
                    Route
                  </th>
                  <th scope="col" style={{ color: "#fff" }}>
                    Total Fee
                  </th>
                  <th scope="col" style={{ color: "#fff" }}>
                    Top Up at the stations
                  </th>
                  <th scope="col" style={{ color: "#fff" }}>
                    number_of_stops
                  </th>
                  <th scope="col" style={{ color: "#fff" }}>
                    Credi Deduction Status
                  </th>
                  {/* <th scope="col" style={{ color: "#fff" }}></th>
                  <th scope="col" style={{ color: "#fff" }}></th> */}
                </tr>
              </thead>
              <tbody>
                {this.state.HistoryTrip.length > 0 &&
                  this.state.HistoryTrip.map((item, index) => (
                    <tr key={item.trip_id}>
                      <th>{item.date}</th>
                      <td>{item.route}</td>
                      <td> {item.total_fee}</td>
                      <td> {item.top_ups_at_the_stations}</td>
                      <td> {item.number_of_stops}</td>
                      <td> {item.credit_deduction_status}</td>

                      {/* <td style={{ color: "white" }}>
                        <Link
                          to={`./PublicTransportEdit/${item._id}`}
                          className=""
                        >
                          Edit
                        </Link>
                      </td> */}
                      {/* <td>
                        <button
                          className="btn btn-danger"
                          onClick={(e) => this.onDelete(e, item._id)}
                        >
                          Delete
                        </button>
                      </td> */}
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


export default tripHistory;