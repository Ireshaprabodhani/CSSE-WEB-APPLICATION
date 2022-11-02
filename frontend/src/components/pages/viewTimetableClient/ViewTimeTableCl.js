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
                name="dateAndtime"
                value={this.state.dateAndtime}
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
                    Date And Time
                  </th>
                  <th scope="col" style={{ color: "#fff" }}>
                    Start
                  </th>
                  <th scope="col" style={{ color: "#fff" }}>
                    Destination
                  </th>
                  {/* <th scope="col" style={{ color: "#fff" }}></th>
                  <th scope="col" style={{ color: "#fff" }}></th> */}
                </tr>
              </thead>
              <tbody>
                {this.state.timetable.length > 0 &&
                  this.state.timetable.map((item, index) => (
                    <tr key={item.route_path}>
                      <th>{item.dateAndtime}</th>
                      <td>{item.start}</td>
                      <td> {item.destination}</td>

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

export default AddStudent;
