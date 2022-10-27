import React, { Component } from "react";
import './main.css'
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
    route: ""

  };

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
        <div>
          <div className="manager_portal_container">
            <div className="v332_27" />
            <div className="v332_28" />
            <div className="v332_29" />
            <div className="v332_30" />
            <div className="v332_31" />
            <div className="v332_32" />
            <div className="v332_33" />
            <span className="v332_34">LogOut</span>
            <span className="v332_35">Profile</span>
            <span className="v332_36">|</span>
            <span className="v332_37">Manager Portal</span>
            <span className="button_home">Home</span>
            <span className="button_statics">Statistics</span>
            <span className="button_view_timetable">View Timetable</span>
            <button className="view_time_table">View Timetables</button>
            <button className="update_timetable">Update Timetables</button>
            <button className="allocated_drivers">Allocate Busses/Drivers</button>
            <span className="v332_41">Selected route : </span>
            <span className="v332_42">{this.state.route} </span>
            <span className="v332_43">Passengers</span>
            <span className="v332_44">Timetable</span>
            <span className="v332_45">FAQ</span>
            <span className="v332_46">Contact</span>
            <div className="v332_47" />
            <div className="v332_48" />
            <div className="name" />
            <div className="name" />
            <div className="name" />
            <div className="name" />
            <input type="text" id="fname" placeholder="Enter route" className="v332_53"
              style={{ marginTop: "0px" }}
              name="route"
              value={this.state.route}
              onChange={this.onChange}
              required

            />

            <div className="v332_55" onClick={this.onSubmit} />
            <div className="v332_56">
              <div className="v332_57" />
              <div className="v332_58" />
            </div>
            <div className="name" />


            <div style={{ marginTop: "500px", width: "800px", marginLeft: "450px" }}>

              {this.state.timetable.length > 0 && this.state.timetable.map((item, index) => (
                <>

                  <div style={{ border: "1px solid black" }} key={item.route_path} className="timeclass">
                    <h3 style={{ marginLeft: "30px", fontSize: "25px", marginTop: "30px" }}>{item.dateAndtime}</h3>
                    <p style={{ marginLeft: "380px", fontSize: "20px", marginTop: "-30px" }}>{item.start}</p>
                    <p style={{ marginLeft: "600px", fontSize: "20px", marginTop: "-40px" }}>{item.destination}</p>
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


export default AddStudent;