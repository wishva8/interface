import React from "react";
import "./createToken.css";

class CreateDeilivaryToken extends React.Component {
  state = {
    orderID: 0,
    description: "",
    urgent: false,
    payMethod: 0,
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onCheckboxValueChange = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };
  submitNew = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/Tokens", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: Number(this.state.orderID),
        urgent: this.state.urgent,
        description: this.state.description,
        payMethod: Number(this.state.payMethod),
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };
  ///////////////////////////////////////////
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      orders: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/api/Orders", {
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
            orders: result,
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
    const { error, isLoaded, orders } = this.state;
    return (
      <div>
        <h3 align="center" className="mt-5">
          Manage Delivary Token
        </h3>
        <div className="row">
          <div className="border border-success col-sm rounded m-5 overflow-auto column">
            <h5 align="center" className="m-2 mb-4">
              Order List
            </h5>
            {orders.map((order) => (
              <div className="row mb-3">
                Order Number : {order.id}
                <br />
                Customer Name : {order.customer.firstName} {order.customer.lastName}
                <br />
                Mobile Name : {order.customer.telephone}
                <br />
                Address : {order.customer.address}
                <br />
              </div>
            ))}
          </div>
          <div className="border border-success col-sm rounded m-5 column">
            <h5 align="center" className="m-2 mb-4">
              Create Delivaly Token
            </h5>
            <form onSubmit={this.submitNew}>
              <div class="form-group row">
                <label for="selectOrder" class="col-sm col-form-label">
                  Order Number :
                </label>
                <div class="col-sm">
                  <select
                    className="col-"
                    name="orderID"
                    onChange={this.onChange}
                    value={
                      this.state.orderID === null ? "" : this.state.orderID
                    }
                  >
                    {orders.map((order) => (
                      <option value={order.id}>{order.id}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div class="form-group row">
                <label for="staticUrgent" class="col-sm col-form-label">
                  Urgent :
                </label>
                <div class="col-sm">
                  <label class="switch">
                    <input
                      type="checkbox"
                      onChange={this.onCheckboxValueChange}
                      value={this.state.urgent}
                      name="urgent"
                    />
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>

              <div class="form-group row">
                <label for="staticItemDesc" class="col-sm col-form-label">
                  Item Description :
                </label>
                <div class="col-sm">
                  <textarea
                    class="form-control"
                    name="description"
                    onChange={this.onChange}
                    value={
                      this.state.description === null
                        ? ""
                        : this.state.description
                    }
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="staticPaytype" class="col-sm col-form-label">
                  Payment Method :
                </label>
                <div class="col-sm">
                  <select
                    className="col-"
                    name="payMethod"
                    onChange={this.onChange}
                    value={
                      this.state.payMethod === null ? "" : this.state.payMethod
                    }
                  >
                    <option value="0">Card</option>
                    <option value="1">Cash</option>
                    <option value="2">Online payment</option>
                  </select>
                </div>
              </div>
              <br />
              <br />
              <div class="form-group row">
                <div className="">
                  <button className="btn btn-outline-success">Cancel</button>
                </div>
                <div className="">
                  <input type="submit" className="btn btn-success ml-2" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateDeilivaryToken;
