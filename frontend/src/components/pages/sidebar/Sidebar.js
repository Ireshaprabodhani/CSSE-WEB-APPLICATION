import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar(props) {
  return (
    <nav id="sidebar" className={props.isActive ? "active" : null}>
      <ul className="list-unstyled components font-color">
        <li>
          <Link to="/" className="font-color">
            <i class="fa fa-cubes" aria-hidden="true"></i>
            Dashboard
          </Link>
        </li>

        <li>
          <a
            href="#timetable"
            className="font-color dropdown-toggle"
            data-toggle="collapse"
            aria-expanded="false"
          >
            <i class="fa fa-user-md" aria-hidden="true"></i>
            TimeTable
          </a>

          <ul className="collapse list-unstyled font-color" id="timetable">
            <li>
              <Link to="./addtimetable" className="font-color">
                <i class="fas fa-dot-circle"></i>
                Add TimeTable
              </Link>
            </li>
            <li>
              <Link to="./timetable" className="font-color">
                <i class="fas fa-dot-circle"></i>
                Update TimeTable
              </Link>
            </li>
          </ul>
        </li>
        {/* <li>
          <a
           
            className="font-color dropdown-toggle"
            data-toggle="collapse"
            aria-expanded="false"
          >
            <i class="fa fa-user-md" aria-hidden="true"></i>
            Time Table
          </a>
          <ul className="collapse list-unstyled font-color" id="surgeons">
            <li>
              <Link to="./new-design" className="font-color">
                <i class="fas fa-dot-circle"></i>
                Add TimeTable
              </Link>
            </li>
            <li>
              <Link to="./surgeons" className="font-color">
                <i class="fas fa-dot-circle"></i>
                Update TimeTable
              </Link>
            </li>
          </ul>
        </li> */}
        {/* <li>
          <a
            href="#surgeons"
            className="font-color dropdown-toggle"
            data-toggle="collapse"
            aria-expanded="false"
          >
            <i class="fa fa-user-md" aria-hidden="true"></i>
            Vehicles
          </a>
          <ul className="collapse list-unstyled font-color" id="surgeons">
            <li>
              <Link to="./new-design" className="font-color">
                <i class="fas fa-dot-circle"></i>
                Add Vehicles
              </Link>
            </li>
            <li>
              <Link to="./surgeons" className="font-color">
                <i class="fas fa-dot-circle"></i>
                Update Vehicles
              </Link>
            </li>
          </ul>
        </li> */}
        <li>
          <a
            href="#surgeons"
            className="font-color dropdown-toggle"
            data-toggle="collapse"
            aria-expanded="false"
          >
            <i class="fa fa-user-md" aria-hidden="true"></i>
            Routes
          </a>
          <ul className="collapse list-unstyled font-color" id="surgeons">
            <li>
              <Link to="./new-design" className="font-color">
                <i class="fas fa-dot-circle"></i>
                Add Routes
              </Link>
            </li>
            <li>
              <Link to="./surgeons" className="font-color">
                <i class="fas fa-dot-circle"></i>
                Update Routes
              </Link>
            </li>
          </ul>
        </li>
        {/* <li>
          <a
            href="#spectacle"
            className="font-color dropdown-toggle"
            data-toggle="collapse"
            aria-expanded="false"
          >
            <i class="fas fa-glasses"></i>
            Spectacle
          </a>
          <ul className="collapse list-unstyled font-color" id="spectacle">
            <li>
              <Link to="./new-design" className="font-color">
                <i class="fas fa-dot-circle"></i>
                Add New Design
              </Link>
            </li>
            <li>
              <Link to="./designs" className="font-color">
                <i class="fas fa-dot-circle"></i>
                All Designs
              </Link>
            </li>
            <li>
              <Link to="./new-custom-design" className="font-color">
                <i class="fas fa-dot-circle"></i>
                Add New Custom Design
              </Link>
            </li>
            <li>
              <Link to="./custom-design" className="font-color">
                <i class="fas fa-dot-circle"></i>
                Custom Designs
              </Link>
            </li>
          </ul>
        </li> */}
        {/* <li>
          <a
            href="#channeling"
            className="font-color dropdown-toggle"
            data-toggle="collapse"
            aria-expanded="false"
          >
            <i class="fas fa-glasses"></i>
            Eye Channeling
          </a>
          <ul className="collapse list-unstyled font-color" id="channeling">
            <li>
              <Link to="./new-design" className="font-color">
                <i class="fas fa-dot-circle"></i>
                Eye Channeling
              </Link>
            </li>
            <li>
              <Link to="./eye-channeling" className="font-color">
                <i class="fas fa-dot-circle"></i>
                Eye Channeling
              </Link>
            </li>
          </ul>
        </li> */}
        <li>
          <a
            href="#staff"
            className="font-color dropdown-toggle"
            data-toggle="collapse"
            aria-expanded="false"
          >
            <i class="fa fa-users" aria-hidden="true"></i>
            User
          </a>
          <ul className="collapse list-unstyled font-color" id="staff">
            <li>
              <Link to="./addcarddetails" className="font-color">
                <i class="fas fa-dot-circle"></i>
                Top Up Account
              </Link>
            </li>
            <li>
              <Link to="./new-design" className="font-color">
                <i class="fas fa-dot-circle"></i>
                View Balance
              </Link>
            </li>
            <li>
              <Link to="./staff" className="font-color">
                <i class="fas fa-dot-circle"></i>
                View Time Table
              </Link>
            </li>
          </ul>
        </li>
        {/* <li>
          <a
            href="#repairs"
            className="font-color dropdown-toggle"
            data-toggle="collapse"
            aria-expanded="false"
          >
            <i class="fas fa-glasses"></i>
            Repairs
          </a>
          <ul className="collapse list-unstyled font-color" id="repairs">
            <li>
              <Link to="./new-design" className="font-color">
                <i class="fas fa-dot-circle"></i>
                Repairs
              </Link>
            </li>
            <li>
              <Link to="./repairs" className="font-color">
                <i class="fas fa-dot-circle"></i>
                Repairs
              </Link>
            </li>
          </ul>
        </li> */}
        {/* <li>
          <a
            href="#blogs"
            className="font-color dropdown-toggle"
            data-toggle="collapse"
            aria-expanded="false"
          >
            <i class="fas fa-glasses"></i>
            Blogs
          </a>
          <ul className="collapse list-unstyled font-color" id="blogs">
            <li>
              <Link to="./new-design" className="font-color">
                <i class="fas fa-dot-circle"></i>
                Blogs
              </Link>
            </li>
            <li>
              <Link to="./blogs" className="font-color">
                <i class="fas fa-dot-circle"></i>
                Blogs
              </Link>
            </li>
          </ul>
        </li> */}

        {/* <li>
          <a
            href="#staff"
            className="font-color dropdown-toggle"
            data-toggle="collapse"
            aria-expanded="false"
          >
            <i class="fa fa-users" aria-hidden="true"></i>
            TimeTable
          </a>
          <ul className="collapse list-unstyled font-color" id="staff">
            <li>
              <Link to="./addcarddetails" className="font-color">
                <i class="fas fa-dot-circle"></i>
              Add TimeTable
              </Link>
            </li>
            <li>
              <Link to="./new-design" className="font-color">
                <i class="fas fa-dot-circle"></i>
               Update TimeTable
              </Link>
            </li>
            <li>
              <Link to="./staff" className="font-color">
                <i class="fas fa-dot-circle"></i>
                View Time Table
              </Link>
            </li>
          </ul>
        </li> */}
      </ul>
    </nav>
  );
}
