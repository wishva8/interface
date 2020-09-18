import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer(params) {
  return (
    <div>
      <div className="mainFooter">
        <div className="container1">
          <div className="row">
            {/*Column1*/}
            <div className="col">
              <img
                src="./logo.png"
                width="200px"
                className="mainLogo"
              ></img>
              <ul className="list1">
                <p1>
                  If you’re in need of medicines – we’re here by your side.
                </p1>
                <br />
                <p1>Stay safe and buy online!</p1>
              </ul>
            </div>
            {/*Column2*/}
            <div className="col">
              <h4>Newsletter</h4>
              <ul className="list1">
                <p1>
                  Join our newsletter and receive 10% off your first puchase
                </p1>
              </ul>
            </div>
            {/*Column3*/}
            <div className="col">
              <h4>Contac Us</h4>
              <ul className="list1">
                <p1>
                  <FontAwesomeIcon icon={faLocationArrow} className="mr-2" />
                  Colombo, Sri lanka
                </p1>
                <br></br>
                <p1>
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  011 287 4798
                </p1>
                <br></br>
                <p1>
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  gaganapharmacy@gmail.com
                </p1>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm" align="center">
              &copy;{new Date().getFullYear()} Gagana Pharmacy | All right
              reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
