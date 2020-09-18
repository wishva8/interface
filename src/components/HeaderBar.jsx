import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./HeaderBarSt.css";
import { Link } from "react-router-dom";

function HeaderBar() {
  return (
    <div className="container-fluid page">
      <div className="row">
        <div className="col-sm">
          <img src="logo.png" alt="logo" className="rounded" width="250" />
        </div>

        <div className="col-sm mt-4" align="center">
          <form action="#" method="get">
            <input
              class="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <input type="submit" hidden />
          </form>
        </div>

        <div className="col-sm mt-4" align="right">
          <div className="dropdown">
            <FontAwesomeIcon
              icon={faUser}
              size="2x"
              className="mr-5 "
              color="black"
            />
              <div class="dropdown-content">
                <Link to="/">Sign out</Link>
                <a href="#">My Profile</a>
                
              </div>
            
          </div>

          <a href="#">
            <FontAwesomeIcon
              icon={faCartPlus}
              size="2x"
              className="mr-4"
              color="black"
            />
          </a>
        </div>
      </div>

      <div>
        <nav className="navbar navbar-expand-lg bg-success container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/DashBoard" className="nav-link nav-bar-item">
                <span className="navbar-brand">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-bar-item" href="#">
                <span className="navbar-brand">Store</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-bar-item" href="#">
                <span className="navbar-brand">Service</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-bar-item" href="#">
                <span className="navbar-brand">Contact Us</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-bar-item" href="#">
                <span className="navbar-brand">About</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HeaderBar;
