import React from "react";
import { Link } from "react-router-dom";

const TicketsComponent = ({ tokens }) => {

// a function that assigns bootstrap styling classes based on 
// the status of the ticket
//   const assignColorToTicketStatus = token => {
//     if (ticket.status === "completed") {
//       return "p-3 mb-2 bg-success text-white";
//     } else if (ticket.status === "in_progress") {
//       return "p-3 mb-2 bg-warning text-dark";
//     } else if (ticket.status === "opened") {
//       return "p-3 mb-2 bg-light text-dark";
//     }
//   };
  return (
    <div className="container-fluid">
      {tokens.length === 0 ? (
        "You currently have no tickets created"
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Token ID</th>
              <th scope="col">Order ID</th>
              <th scope="col">Status</th>
              <th scope="col">Description</th>
              <th scope="col">PayMethod</th>
              <th scope="col">Urgent</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Telephone</th>
              
            </tr>
          </thead>
          <tbody>
            {tokens.map(token => (
              <tr key={token.id}>
                <td>{token.id}</td>
                <td>{token.orderID}</td>
                <td>{token.stringStatus}</td>
                <td>{token.description}</td>
                <td>{token.stringPayMethod}</td>
                <td>{token.stringUrgent}</td>
                <td>{token.customer.firstName}</td>
                <td>{token.customer.lastName}</td>
                <td>{token.customer.telephone}</td>
             
                {/* <td>{ticket.request}</td> */}
                {/* <td className={assignColorToTicketStatus(ticket)}>
                  {ticket.status}
                </td> */}
                {/* <td>
                  <Link to={`/ticket/${ticket.id}`}>See comments</Link>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TicketsComponent;