import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePrescription } from "@fortawesome/free-solid-svg-icons";
import { faFileMedical } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import "./PharmasistDashboard.css";
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      statistics: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/api/Tokens/GetStatistics", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            statistics: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const { error, isLoaded, statistics } = this.state;
    return (
      <div>
        <div>
          <div
            className="border border-success rounded-pill row stat-bar mt-5 mb-5"
            align="center"
            width="100%"
          >
            <div className="col-sm">
              <FontAwesomeIcon icon={faFilePrescription} size="4x" />
              <h4>Prescriptions</h4>
              <h4 >{statistics.prescriptionCount}</h4>
              {/* counterVariable */}
            </div>
            <div className="col-sm">
              <FontAwesomeIcon icon={faFileMedical} size="4x" />
              <h4>Orders</h4>
              <h4>{statistics.orderCount}</h4>
              {/* counterVariable */}
            </div>
            <div className="col-sm">
              <FontAwesomeIcon icon={faUsers} size="4x" />
              <h4>Customers</h4>
              <h4>{statistics.customerCount}</h4>
              {/* counterVariable */}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="border border-success mb-5 ml-5 rounded">
            <div align="center">
              <div className="col-10 pl-10 mt-5" align="left">
                <div className="row-sm mb-4">
                  <Link to="/CreateDeilivaryToken">
                    <button
                      className="btn btn-outline-success"
                      onClick="location.replace('#')"
                    >
                      Create Delivary Token
                    </button>
                  </Link>
                </div>
                <div className="row-sm mb-4">
                  <Link to="/DelivaryTokenDetails">
                    <button
                      className="btn btn-outline-success"
                      onClick="location.replace('#')"
                    >
                      View Delivary Token
                    </button>
                  </Link>
                </div>
                <div className="row-sm mb-4">
                  <Link to="/Prescription">
                    <button
                      className="btn btn-outline-success"
                      onClick="location.replace('#')"
                    >
                      Prescriptions
                    </button>
                  </Link>
                </div>
                <div className="row-sm mb-4">
                  <Link to="/Report">
                    <button
                      className="btn btn-outline-success"
                      onClick="location.replace('#')"
                    >
                      Generate Customer Progress Report
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm"></div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
