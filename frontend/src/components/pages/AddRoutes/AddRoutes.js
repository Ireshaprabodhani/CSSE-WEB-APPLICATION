import React, { Component } from "react";
// import "./main.css";
import axios from "axios";
import { APIURL } from "../../API/environment";
import { color } from "@mui/system";

const TopUpID = "615b62836b077090fc9c11e9";

class addRoutes extends Component {
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
      routeId: "",
      arrival: "",
      departure: "",
      fair: "",
    
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

    const RouteDetails = {
      routeId: this.state.routeId,
      arrival: this.state.arrival,
      departure: this.state.departure,
      fair: this.state.fair,
    
    };

    console.log("Route Details: ", RouteDetails);

    axios.post(`${APIURL}/Route/create-route`, RouteDetails).then((res) => {
      console.log("res", res);
      if (res.data.code === 200) {
        console.log("res.data.code", res.data.code);
        alert("Date Inserted !");
        window.location = "/viewRoutes";
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
                Add Routes
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
                      Enter Route ID
                    </lable>
                    <input
                      className="fname"
                      type="text"
                      name="routeId"
                      value={this.state.routeId}
                      onChange={this.onChange}
                      placeholder = "Route ID"
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
                    <label style={{}}>Enter Arrival</label>
                    <input
                      type="text"
                      name="arrival"
                      value={this.state.arrival}
                      onChange={this.onChange}
                      placeholder = "arrival"
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
                    <label style={{}}>Enter Departure</label>
                    <input
                      type="text"
                      name="departure"
                      value={this.state.departure}
                      onChange={this.onChange}
                      placeholder = "Departure"
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
                    <label style={{}}>Enter Fair</label>
                    <input
                      type="text"
                      name="fair"
                      value={this.state.fair}
                      onChange={this.onChange}
                      placeholder = "Fair"
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

export default addRoutes;
