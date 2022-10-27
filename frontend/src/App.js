import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { ToastContainer } from "react-toastify";
import addCardDetails from "./components/pages/AddCardDetails/addCardDetails";
import tripHistory from "./components/pages/Trip History/tripHistory";
import TimeTable from "./components/pages/Time Table/timeTable";
import PublicTransport from "./components/pages/Public Transport/PublicTransport";
import PublicTransportEdit from "./components/pages/Public Transport Edit/publicTransportEdit";
// import AddTimeTable from "./components/pages/Add TimeTable/addTimeTable";
import addTimeTable from "./components/pages/Add TimeTable/addTimeTable";

function App() {
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
        <Switch>
          <Route path="/" exact component={addCardDetails} />
          <Route path="/PublicTransport" exact component={PublicTransport} />
          <Route
            path="/PublicTransportEdit"
            exact
            component={PublicTransportEdit}
          />
          <Route path="/TimeTable" exact component={TimeTable} />
          <Route path="/tripHistory" exact component={tripHistory} />
          {/* <Route path="/tripHistory" exact component={tripHistory} />
          <Route path="/TimeTable" exact component={TimeTable} />
          <Route path="/PublicTransport" exact component={PublicTransport} />
          <Route path="/PublicTransportEdit" exact component={PublicTransportEdit} /> */}
          <Route path="/addtimetable" exact component={addTimeTable} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
