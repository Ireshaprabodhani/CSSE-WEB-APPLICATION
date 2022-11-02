import React, { Component } from "react";
import "./main.css";
import axios from "axios";
import { APIURL } from "../../API/environment";
import { color } from "@mui/system";

const TopUpID = "615b62836b077090fc9c11e9";

class addTimeTable extends Component {
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
      route: "",
      route_path: "",
      dateAndtime: "",
      start: "",
      destination: "",
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

    const TimeTableDetails = {
      route: this.state.route,
      route_path: this.state.route_path,
      dateAndtime: this.state.dateAndtime,
      start: this.state.start,
      destination: this.state.destination,
    };

    console.log("TimeTableDetails Details: ", TimeTableDetails);

    axios
      .post(`${APIURL}/TimeTable/create-timetable`, TimeTableDetails)
      .then((res) => {
        console.log("res", res);
        if (res.data.code === 200) {
          console.log("res.data.code", res.data.code);
          alert("Date Inserted !");
          window.location = "/PublicTransport";
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
                Add Time Table
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
                      Enter Route
                    </lable>
                    <input
                      className="fname"
                      type="text"
                      name="route"
                      value={this.state.route}
                      onChange={this.onChange}
                      placeholder="Enter route"
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
                    <label style={{}}>Enter Route Path</label>
                    <input
                      type="text"
                      name="route_path"
                      value={this.state.route_path}
                      onChange={this.onChange}
                      placeholder="Enter route Path"
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
                    <label style={{}}>Enter Date and TIME</label>
                    <input
                      type="text"
                      name="dateAndtime"
                      value={this.state.dateAndtime}
                      onChange={this.onChange}
                      placeholder="Enter Time and Date"
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
                    <label style={{}}>Enter Start</label>
                    <input
                      type="text"
                      name="start"
                      value={this.state.start}
                      onChange={this.onChange}
                      placeholder="Start"
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
                    <label style={{}}>Enter Destination</label>
                    <input
                      type="text"
                      name="destination"
                      value={this.state.destination}
                      onChange={this.onChange}
                      placeholder="End"
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
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default addTimeTable;
