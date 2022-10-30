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
            href="#customers"
            className="font-color dropdown-toggle"
            data-toggle="collapse"
            aria-expanded="false"
          >
            <i class="fa fa-user" aria-hidden="true"></i>
            Customers
          </a>
          <ul className="collapse list-unstyled font-color" id="customers">
            <li>
              <Link to="./customer/add" className="font-color">
                <i class="fa fa-users" aria-hidden="true"></i>
                Add New Customers
              </Link>
            </li>
            <li>
              <Link to="/deleteCustomer" className="font-color">
                <i class="fas fa-dot-circle"></i>
                Get Customer Details
              </Link>
            </li>
            <li>
              <Link to="/Customers" className="font-color">
                <i class="fas fa-dot-circle"></i>
                View Customer
              </Link>
            </li>
            <li>
              <Link to="/editCustomer" className="font-color">
                <i class="fas fa-dot-circle"></i>
                Edit Customer
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#patients"
            className="font-color dropdown-toggle"
            data-toggle="collapse"
            aria-expanded="false"
          >
            <i class="fas fa-glasses"></i>
            Patients
          </a>
          <ul className="collapse list-unstyled font-color" id="patients">
            <li>
              <Link to="./new-design" className="font-color">
                <i class="fas fa-dot-circle"></i>
                Patients
              </Link>
            </li>
            <li>
              <Link to="./patients" className="font-color">
                <i class="fas fa-dot-circle"></i>
                Patients
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#surgeons"
            className="font-color dropdown-toggle"
            data-toggle="collapse"
            aria-expanded="false"
          >
            <i class="fa fa-user-md" aria-hidden="true"></i>
            Surgeons
          </a>
          <ul className="collapse list-unstyled font-color" id="surgeons">
            <li>
              <Link to="./new-design" className="font-color">
                <i class="fas fa-dot-circle"></i>
                Surgeons
              </Link>
            </li>
            <li>
              <Link to="./surgeons" className="font-color">
                <i class="fas fa-dot-circle"></i>
                Surgeons
              </Link>
            </li>
          </ul>
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
          <a
            href="#staff"
            className="font-color dropdown-toggle"
            data-toggle="collapse"
            aria-expanded="false"
          >
            <i class="fas fa-user-headset"></i>
            Staff
          </a>
          <ul className="collapse list-unstyled font-color" id="staff">
            <li>
              <Link to="./new-design" className="font-color">
                <i class="fas fa-dot-circle"></i>
                Staff
              </Link>
            </li>
            <li>
              <Link to="./staff" className="font-color">
                <i class="fas fa-dot-circle"></i>
                Staff
              </Link>
            </li>
          </ul>
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
      </ul>
    </nav>
  );
}
