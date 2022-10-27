import React, { Component } from "react";
import "./main.css";
import axios from "axios";
import { APIURL } from "../../API/environment";

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
      currentDate: date,
      TopUp: [],
      cardtype: "Credit",
      cardnumber: "",
      cardname: "",
      expdate: "",
      cvv: "",
      amount: "",
      latest_payment: "",
      latest_payment_date: "",
      current_balance: "",
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

    const amountcount = Number(this.state.current_balance);
    const current_balancecount = Number(this.state.amount);

    const studentDetails = {
      latest_payment: this.state.amount,
      latest_payment_date: this.state.currentDate,
      current_balance: amountcount + current_balancecount,
    };

    console.log("classApplications Details: ", studentDetails);

    axios
      .put(`${APIURL}/TopupPayment/update-Topup/${TopUpID}`, studentDetails)
      .then((res) => {
        console.log("res", res);
        if (res.data.code === 200) {
          console.log("res.data.code", res.data.code);
          alert("Date Inserted !");
          window.location.reload();
        } else {
          alert(res.data.message);
          window.location.reload();
        }
      });
  }

  componentDidMount() {
    axios
      .get(`${APIURL}/TopupPayment/getAllTopListbyID/${TopUpID}`)

      .then((response) => {
        this.setState({ TopUp: response.data.data });
        console.log("response ", this.state.TopUp);

        this.setState({ latest_payment: this.state.TopUp.latest_payment });
        this.setState({
          latest_payment_date: this.state.TopUp.latest_payment_date,
        });
        this.setState({ current_balance: this.state.TopUp.current_balance });
      });
  }

  render() {
    return (
      <>
        <div>
          <div>
            <p className="v75:145">Sign Up</p>
            <div className="v318_65">
              <div className="v318_66" />
              <div className="v318_67" />
              <span className="v318_68">Links</span>
              <span className="v318_69">
                Travel Buddy is here to help you to make your travel desires
                easier more than ever
              </span>
              <span className="v318_70"></span>
              <span className="v318_71">&gt; Help</span>
              <span className="v318_72">
                travelbuddy@gmail.com 072 345 55 66
              </span>
              <span className="v318_73">About Us</span>
              <span className="v318_74">Home</span>
              <a href="/">
                <span className="v328_32">Payments</span>
              </a>
              <a href="/TimeTable">
                <span className="v328_33">Timetable</span>
              </a>
              <a href="/tripHistory">
                <span className="v328_34">Trip History</span>
              </a>
              <span className="v318_78">Contact Us</span>
              <span className="v318_79">About Us</span>
              <span className="v318_80">LogOut | Profile</span>
              <span className="v318_81">Travel Buddy</span>
              <div className="v318_82" />
              <span className="v318_83">Status : Payment Pending</span>
              <span className="v318_84">
                *Please top up your card to procced
              </span>
              <div className="name" />
              <span className="v318_86">My Recent Trip</span>
              <span className="v318_87">
                02/09/2021 from Kandy to Kurunegala
              </span>
              <span className="v318_88">Home&gt;Payments</span>
              <span className="v318_89">
                02/09/2021 from Kandy to Kurunegala
              </span>
              <span className="v318_90">Available Card Account Balance :</span>
              <span className="v318_91">Total Fee : </span>
              <span className="v318_92">Sub Total : Rs. 250.00</span>
              <span className="v318_93">Sub Total : Rs. 250.00</span>
              <span className="v318_94">Rs. 0.00</span>
              <div className="v318_96" />
              <div className="name" />
              <span className="v318_98">Top Up with your VISA/Master</span>
              <span className="v318_99">Your Card Details</span>
              <div className="v318_101">
                <span className="v318_102">
                  {" "}
                  <input
                    type="number"
                    id="fname"
                    placeholder="Card Number"
                    name="cardnumber"
                    value={this.state.cardnumber}
                    onChange={this.onChange}
                    required
                    style={{
                      width: "325px",
                      height: "46px",
                      marginTop: "-20px",
                      marginLeft: "-5px",
                    }}
                  />
                </span>
              </div>
              <div className="v318_103">
                <span className="v318_104">
                  <input
                    type="text"
                    id="fname"
                    placeholder="Card Name"
                    name="cardname"
                    value={this.state.cardname}
                    onChange={this.onChange}
                    required
                    style={{
                      width: "325px",
                      height: "46px",
                      marginTop: "-20px",
                      marginLeft: "-5px",
                    }}
                  />
                </span>
              </div>
              <span className="v318_105">* Card Number</span>
              <span className="v318_106">* Card Name</span>
              <div className="v318_107">
                <span className="v318_108">
                  <input
                    type="number"
                    id="fname"
                    placeholder="Amount"
                    name="amount"
                    value={this.state.amount}
                    onChange={this.onChange}
                    required
                    style={{
                      width: "325px",
                      height: "46px",
                      marginTop: "-20px",
                      marginLeft: "-5px",
                    }}
                  />
                </span>
              </div>
              <span className="v318_109">* Amount</span>
              <span className="v318_110">* Exp Date</span>
              <span className="v318_111" style={{ marginTop: "0px" }}>
                CVV
              </span>
              <div className="v318_112">
                <span className="v318_113">
                  <input
                    type="number"
                    id="fname"
                    placeholder="MM/DD"
                    name="expdate"
                    value={this.state.expdate}
                    onChange={this.onChange}
                    required
                    style={{
                      width: "158px",
                      height: "46px",
                      marginTop: "-20px",
                      marginLeft: "-5px",
                    }}
                  />
                </span>
              </div>
              <div className="v318_114">
                <span className="v318_115">
                  <input
                    type="number"
                    id="fname"
                    placeholder="CVV"
                    name="cvv"
                    value={this.state.cvv}
                    onChange={this.onChange}
                    required
                    style={{
                      width: "158px",
                      height: "46px",
                      marginTop: "-20px",
                      marginLeft: "-5px",
                    }}
                  />
                </span>
              </div>
              <div className="name" />
              <div className="name" />
              <div className="name" />
              <span className="v318_119">Copyright@ travelbuddy.com</span>
              <div className="name" />
              <span className="v318_121">Account ID</span>
              <span className="v318_122">ID_1155243</span>
              <span className="v318_123">Account Name</span>
              <span className="v318_124">Shehan Perera</span>
              <span className="v318_125">Card ID</span>
              <span className="v318_126">CID_885954</span>
              <span className="v318_127">Latest Payment</span>
              <span className="v318_128">{this.state.latest_payment}</span>
              <span className="v318_129">Latest Payment Date</span>
              <span className="v318_130">{this.state.latest_payment_date}</span>
              <span className="v318_131">Current Balance</span>
              <span className="v318_132">{this.state.current_balance}</span>
              <span className="v318_133" onClick={this.onSubmit}>
                <button>Top Up</button>
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AddStudent;
