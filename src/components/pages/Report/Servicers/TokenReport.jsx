import React, { useEffect, useState } from "react";
import generatePDF from "./ReportGenaretor";
import TicketsComponent from "./TokenReportComponent";
import { axios } from "axios";

const Tickets = () => {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    const getAllTokens = async () => {
      try {
        fetch("http://localhost:5000/api/Tokens", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then(
            (result) => {
              setTokens(result);
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error,
              });
            }
          );
      } catch (err) {
        console.log("error");
      }
    };
    getAllTokens();
  }, []);

  //   const reportTokens = tokens.filter((token) => token.status === "0");

  return (
    <div align="center">
      <div className="container mb-5 mt-4 p-3">
        <h3>Monthly Delivery Token Report</h3>
      </div>
      <TicketsComponent tokens={tokens} />
      <button className="btn btn-outline-success m-5" align="center" onClick={() => generatePDF(tokens)}>
        Generate monthly report
      </button>
    </div>
  );
};

export default Tickets;
