import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive
// from our API call
import { format } from "date-fns";

// define a generatePDF function that accepts a tickets argument
const generatePDF = (tokens) => {
  // initialize jsPDF
  const doc = new jsPDF();

  // define the columns we want and their titles
  const tableColumn = [
    "Token ID",
    "Order ID",
    "Status",
    "Description",
    "PayMethod",
    "Urgent",
    "First Name",
    "Last Name",
    "Telephone",
  ];
  // define an empty array of rows
  const tableRows = [];

  // for each ticket pass all its data into an array

  if (tokens && tokens.length > 0) {
    tokens.forEach((token) => {
      const tokenData = [
        token.id,
        token.orderID,
        token.stringStatus,
        token.description,
        token.stringPayMethod,
        token.stringUrgent,
        token.customer.firstName,
        token.customer.lastName,
        token.customer.telephone,
        // called date-fns to format the date on the ticket
        //   format(new Date(ticket.updated_at), "yyyy-MM-dd")
      ];
      // push each tickcet's info into a row
      tableRows.push(tokenData);
    });

    // startY is basically margin-top
    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    const date = Date().split(" ");
    // we use a date string to generate our filename.
    const dateStr =
      date[0] +
      date[1] +
      date[2] +
      date[3] +
      date[4] +
      date[5] +
      date[6] +
      date[7] +
      date[8];
    // ticket title. and margin-top + margin-left
    doc.text("Monthly Delivery Token Report", 14, 15);
    // we define the name of our PDF file.
    doc.save(`report_${dateStr}.pdf`);
  }
};

export default generatePDF;
