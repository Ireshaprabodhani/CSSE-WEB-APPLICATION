import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import { ToastContainer } from "react-toastify";
import addCardDetails from "./components/pages/addCardDetails/addCardDetails";
import tripHistory from "./components/pages/Trip History/tripHistory";
import TimeTable from "./components/pages/Time Table/timeTable";
import PublicTransport from "./components/pages/Public Transport/PublicTransport";
import PublicTransportEdit from "./components/pages/Public Transport Edit/publicTransportEdit";
// import AddTimeTable from "./components/pages/Add TimeTable/addTimeTable";
import addTimeTable from "./components/pages/Add TimeTable/addTimeTable";
import Home from "./components/pages/Home/Home";
import Sidebar from "./components/pages/sidebar/Sidebar";
import React, { useState } from "react";
import NavBarClient from "./components/pages/NavBarClient/NavBarClient";
import ViewBalance from "./components/pages/viewBalance/ViewBalance";
import ViewTimeTableCl from "./components/pages/viewTimetableClient/ViewTimeTableCl";
import AddTripHistory from "./components/pages/Trip History/AddTripHistory";
import AddRoutes from "./components/pages/AddRoutes/AddRoutes"
import ViewRoutes from "./components/pages/ViewRoutes/ViewRoutes"

function App() {
  const [isActive, setActive] = useState(false);
  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <NavBarClient setActive={setActive} isActive={isActive} />
        <div id="wrapper" className="d-flex col-md-12">
          <div className="id_grid_system">
            <div className="left_bar">
              <Sidebar setActive={setActive} isActive={isActive} />
            </div>
            <div className="right_bar">
              <div id="content-wrapper">
                <Switch>
                  <Route path="/addcarddetails"exact component={addCardDetails} />
                  <Route path="/" exact component={Home} />

                  <Route
                    path="/PublicTransport"
                    exact
                    component={PublicTransport}
                  />
                  <Route
                    path="/PublicTransportEdit"
                    exact
                    component={PublicTransportEdit}
                  />
                  <Route path="/TimeTable" exact component={TimeTable} />
                  <Route path="/tripHistory" exact component={tripHistory} />
                  <Route path="/addtimetable" exact component={addTimeTable} />
                  <Route path="/viewBalnce" exact component={ViewBalance} />
                  <Route path="/createRoute" exact component={AddRoutes} />
                  <Route path="/viewRoutes" exact component={ViewRoutes} />

                  <Route
                    path="/viewClientTb"
                    exact
                    component={ViewTimeTableCl}
                  />
                  <Route
                    path="/addTripHistory"
                    exact
                    component={AddTripHistory}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
