import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./HeaderBarSt.css";

function HeaderBar() {
  return (
    <div className="container-fulid page">
      <div className="row">
        <div className="col-sm">
          <img src="logo.png" alt="logo" className="rounded" width="250"></img>
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
          <FontAwesomeIcon icon={faUser} size="2x" className="mr-5" />
          <FontAwesomeIcon icon={faShoppingCart} size="2x" className="mr-4" />
        </div>
      </div>

      <div>
        <nav className="navbar navbar-expand-lg bg-success container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link nav-bar-item" href="#">
                <span className="navbar-brand">Home</span>
              </a>
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
            <li className="nav-item">
              <a className="nav-link nav-bar-item" href="#">
                <span className="navbar-brand ">Login</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HeaderBar;
