import React, { Component } from "react";
import "./ViewTimeTableCl.css";
import axios from "axios";
import { APIURL } from "../../API/environment";
import { Button, Link } from "@mui/material";

class AddStudent extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  state = {
    cardtype: "Credit",
    cardnumber: "",
    cardname: "",
    expdate: "",
    cvv: "",
    amount: "",
    timetable: [],
    route: "",
  };
//   onDelete(event, ID) {
//     axios.delete(`${APIURL}/TimeTable/DeleteByID/${ID}`).then((res) => {
//       console.log("res", res);
//       if (res.data.code === 200) {
//         console.log("res.data.code", res.data.code);
//         alert("Deleted !");
//         window.location.reload();
//       } else {
//         alert(res.data.message);
//         window.location.reload();
//       }
//     });
//   }

  onGenderOptionSelected(e) {
    this.state.items = e.label;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    let studentDetails = {
      route: this.state.route,
    };

    console.log("classApplications Details: ", studentDetails);

    axios
      .get(`${APIURL}/TimeTable/getDetailsByRoute/${this.state.route}`)
      .then((response) => {
        this.setState({ timetable: response.data.data });
        console.log("timetable ", this.state.timetable);
      });
  }

  componentDidMount() {
    axios
      .get(`${APIURL}/TimeTable/GetAllTimeTable`)

      .then((response) => {
        this.setState({ timetable: response.data.data });
        console.log("timetable ", this.state.timetable);
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
            }}
          >
            <div style={{ marginLeft: "400px", color:"blue" }}>
              <h3> View Time Table</h3>
            </div>

         
            <div>
              <span
                className=""
                style={{ marginLeft: "80px", marginTop: "20px" }}
              >
                Selected route :{" "}
              </span>
              <span className="">{this.state.route} </span>

              <input
                type="text"
                id="fname"
                placeholder="Enter route"
                className=""
                style={{
                  marginTop: "20px",
                  marginLeft: "200px",
                  width: "300px",
                  borderRadius: "5px",
                }}
                name="route"
                value={this.state.route}
                onChange={this.onChange}
                required
              />

             
            </div>
            <br></br>

            <table
              class="table"
              style={{ marginTop: "40px", borderRadius: "5PX" }}
            >
                        <thead style={{
                  backgroundColor:'lightblue'
              }}>
                <tr>
                  <th scope="col">Date And Time</th>
                  <th scope="col">Start</th>
                  <th scope="col">Destination</th>
                 
                </tr>
              </thead>
              <tbody>
                {this.state.timetable.length > 0 &&
                  this.state.timetable.map((item, index) => (
                    <tr key={item.route_path}>
                      <th>{item.dateAndtime}</th>
                      <td>{item.start}</td>
                      <td> {item.destination}</td>

                      
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

export default AddStudent;
