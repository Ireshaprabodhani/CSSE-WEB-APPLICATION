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
        <div>
          <div className="v328_22">
            <div className="v328_23" />
            <div className="v328_24" />
            <span className="v328_25">Links</span>
            <span className="v328_26">Travel Buddy is here to help you to make your travel desires easier more than ever</span>
            <span className="v328_27">&gt; FAQ</span>
            <span className="v328_28">&gt; Help</span>
            <span className="v328_29">travelbuddy@gmail.com
              072 345 55 66</span>
            <span className="v328_30">About Us</span>
            <span className="v328_31">Home</span>
            <a href="/"><span className="v328_32">Payments</span></a>
            <a href="/TimeTable"><span className="v328_33">Timetable</span></a>
            <a href="/tripHistory"><span className="v328_34">Trip History</span></a>
            <span className="v328_35">Contact Us</span>
            <span className="v328_36">About Us</span>
            <span className="v328_37">LogOut     |    Profile</span><span className="v328_38">Travel Buddy</span>
            <div className="v328_39" />
            <div className="v328_40" />
            <div className="name" /><div className="name" />
            <div className="name" /><span className="v328_44">My Trips</span>
            <span className="v328_45">{this.state.trip_id}</span>
            <span className="v328_46">{this.state.date}</span>
            <span className="v328_47">  {this.state.route}</span>
            <span className="v328_48">Home&gt;Trip History</span>
            <span className="v328_49">Total Fee   : </span>
            <span className="v328_50">Top Ups at the stations   : </span>
            <span className="v328_51">Number of Stops   : </span>
            <span className="v328_52">Credit Deduction Status : </span>
            <span className="v328_53">Trip ID : </span>
            <span className="v328_54">Date : </span>
            <span className="v328_55">Routes : </span>
            <span className="v328_56">{this.state.total_fee}</span>
            <span className="v328_57">{this.state.top_ups_at_the_stations}</span>
            <span className="v328_58">{this.state.number_of_stops}</span>
            <span className="v328_59">{this.state.credit_deduction_status}</span>
            <span className="v328_60">Copyright@ travelbuddy.com</span>
            <input type="text" id="fname" placeholder="Enter Date" className="v328_62"
              style={{ marginTop: "40px" }}
              name="search_date"
              value={this.state.search_date}
              onChange={this.onChange}
              required
              style={{ width: "325px", height: "46px", marginTop: "-20px", marginLeft: "-5px" }}
            />
            <div className="v328_64"></div>
            <div className="v328_65" onClick={this.onSubmit} />
            <button className="v332_105">Print</button>
            <button className="v332_106">Back</button>

          </div>
        </div>

      </>
    );

  }
}


export default tripHistory;