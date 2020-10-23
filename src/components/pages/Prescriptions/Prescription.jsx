import React from "react";

class Prescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      prescriptions: [],
    };
  }
  //get prescription details
  componentDidMount() {
    fetch("http://localhost:5000/api/Customers/Prescription", {
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
            prescriptions: result,
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
    const { error, isLoaded, prescriptions } = this.state;
    return (
      <div>
        <div>
          <h1 className="m-5" align="center">
            Prescriptions
          </h1>
        </div>
        <div className="row">
          {prescriptions.map((prescription) => (
            <div className="col-sm-3 border border-success rounded m-5">
              <img
                src={`data:image/jpeg;base64,${prescription.image}`}
                height="300px"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Prescription;
