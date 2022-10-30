import React, { Component } from "react";
import './main.css'
import axios from "axios";
import { APIURL } from "../../API/environment";


const initialState = {
  cardtype: "Credit",
  cardnumber: "",
  cardname: "",
  expdate: "",
  cvv: "",
  amount: "",
  timetable: [],
  route: ""

};

class timeTable extends Component {

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

    let studentDetails = {

      route: this.state.route

    };



    console.log("classApplications Details: ", studentDetails);

    axios
      .get(`${APIURL}/TimeTable/getDetailsByRoute/${this.state.route}`)
      .then(response => {

        this.setState({ timetable: response.data.data });
        console.log("timetable ", this.state.timetable);
      })

  }

  componentDidMount() {


    axios.get(`${APIURL}/TimeTable/GetAllTimeTable`)

      .then(response => {

        this.setState({ timetable: response.data.data });
        console.log("timetable ", this.state.timetable);
      })
  }

  render() {


    return (
      <>
        <div className="timetable_container">
          <a href="/tripHistory">
            <span className="trip_history">Trip History</span>
          </a>

          <div className="view_timetable_content">
            <span className="view_timetable">View Timetable</span>
            <input
              type="text"
              id="fname"
              placeholder="Enter route"
              style={{ marginTop: "0px", width: "500px", marginLeft:"10px" }}
              name="route"
              value={this.state.route}
              onChange={this.onChange}
              required
            />
          </div>
          <div className="selected_route_dev">
            <span className="selected_route">Selected route : </span>
          </div>
          <div>
            {/* <span className="v331_97">{this.state.route} </span> */}

            <div className="v331_101" onClick={this.onSubmit} />
            <div className="v331_102">
              <div className="v331_103" />
              <div className="v331_104" />
            </div>
            <div className="name" />

            <div
              style={{
                marginTop: "350px",
                width: "800px",
                marginLeft: "350px",
              }}
            >
              {this.state.timetable.length > 0 &&
                this.state.timetable.map((item, index) => (
                  <>
                    <div
                      style={{ border: "1px solid black" }}
                      key={item.route_path}
                      className="timeclass"
                    >
                      <h3
                        style={{
                          marginLeft: "30px",
                          fontSize: "25px",
                          marginTop: "30px",
                        }}
                      >
                        {item.dateAndtime}
                      </h3>
                      <p
                        style={{
                          marginLeft: "380px",
                          fontSize: "20px",
                          marginTop: "-30px",
                        }}
                      >
                        {item.start}
                      </p>
                      <p
                        style={{
                          marginLeft: "600px",
                          fontSize: "20px",
                          marginTop: "-40px",
                        }}
                      >
                        {item.destination}
                      </p>
                    </div>
                  </>
                ))}
            </div>
          </div>
        </div>
      </>
    );

  }
}


export default timeTable;