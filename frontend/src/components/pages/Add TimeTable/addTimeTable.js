import React, {Component} from 'react'
import { APIURL } from "../../API/environment";
import './main.css';

function addTimeTable() {
  return (
    <>
      <div>
        <div className="main-block">
          <div className="left-part">
            <i className="fas fa-envelope" />
            <i className="fas fa-at" />
            <i className="fas fa-mail-bulk" />
          </div>
          <form
            // onSubmit={this.onSubmit}
            style={{ width: "1000px", marginLeft: "-700px" }}
          >
            <h1>Add Time Table</h1>
            <div className="info" style={{ width: "" }}>
              <input
                className="fname"
                type="text"
                name="route"
                // value={this.state.route}
                // onChange={this.onChange}
                placeholder="Enter route"
              />

              <input
                type="text"
                name="route_path"
                // value={this.state.route_path}
                // onChange={this.onChange}
                placeholder="Enter route Path"
              />

              <input
                type="text"
                name="dateAndtime"
                // value={this.state.dateAndtime}
                // onChange={this.onChange}
                placeholder="Enter Time and Date"
              />

              <input
                type="text"
                name="start"
                // value={this.state.start}
                // onChange={this.onChange}
                placeholder="Start"
              />

              <input
                type="text"
                name="destination"
                // value={this.state.destination}
                // onChange={this.onChange}
                placeholder="End"
              />
            </div>

            <button type="submit" href="/">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default addTimeTable
