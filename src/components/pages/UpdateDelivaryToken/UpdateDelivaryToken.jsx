import React from "react";
import { Link } from "react-router-dom";

// import "./createToken.css";

class UpdateDelivaryToken extends React.Component {
  state = {
    orderID: 0,
    description: "",
    urgent: false,
    payMethod: 0,
    status: 0,
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onCheckboxValueChange = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  //send data to update
  submitEdit = (e) => {
    e.preventDefault();

    let tokenId = localStorage.getItem("token");
    debugger;
    fetch("http://localhost:5000/api/Tokens", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Number(tokenId),
        orderID: Number(this.state.orderID),
        urgent: this.state.urgent,
        description: this.state.description,
        payMethod: Number(this.state.selectedToken.payMethod),
        status: Number(this.state.status),
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };
  //////////////////////////
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      tokens: [],
      selectedToken: null,
      orders: [],
    };
  }
  //get order ids
  getOrder = (e) => {
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
  };
  //get token details
  componentDidMount() {
    let tokenId = localStorage.getItem("token");
    fetch("http://localhost:5000/api/Tokens", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          let tok = result.filter((f) => f.id == tokenId)[0];

          this.setState({
            isLoaded: true,
            tokens: result,
            selectedToken: tok,
            description: tok.description,
            status: tok.status,
            urgent: tok.urgent,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      )
      .then(() => {
        this.getOrder();
      });
  }
  render() {
    const {
      error,
      isLoaded,
      tokens,
      selectedToken,
      orders,
      description,
      status,
    } = this.state;
    return (
      <div>
        <h3 align="center" className="mt-5">
          Make Changers In Delivary Token
        </h3>
        <div className="row">
          <div className="border border-success col-sm rounded m-5 overflow-auto column2">
            <h5 align="center" className="m-2 mb-4">
              Token List
            </h5>
            {tokens.map((token) => (
              <div className="row mb-3">
                Token Number : {token.id}
                <br />
                Order Number : {token.orderID}
                <br />
                Customer Name : {token.customer.firstName}{" "}
                {token.customer.lastName}
                <br />
                Mobile Name : {token.customer.telephone}
                <br />
                Status : {token.stringStatus}
                <br />
                Description : {token.description}
                <br />
                Payment Method : {token.stringPayMethod}
                <br />
                Urgent : {token.stringUrgent}
                <br />
              </div>
            ))}
          </div>
          <div className="border border-success col-sm rounded m-5 column2">
            <h5 align="center" className="m-2 mb-4">
              Update Delivaly Token
            </h5>
            <form onSubmit={this.submitEdit}>
              <div class="form-group row">
                <label for="staticToken" class="col-sm col-form-label">
                  Token Number :
                </label>
                <div class="col-sm">
                  <input
                    type="text"
                    readOnly
                    class="form-control-plaintext"
                    id="staticToken"
                    value={selectedToken === null ? "" : selectedToken.id}
                  />
                </div>
              </div>
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
                <label for="staticPaytype" class="col-sm col-form-label">
                  status :
                </label>
                <div class="col-sm">
                  <select
                    className="col-"
                    name="status"
                    onChange={this.onChange}
                    value={this.state.status === null ? "" : this.state.status}
                  >
                    <option value="0">Processing</option>
                    <option value="1">Ready</option>
                    <option value="2">Completed</option>
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
                <label for="staticCusName" class="col-sm col-form-label">
                  Customer Name :
                </label>
                <div class="col-sm">
                  <input
                    readOnly
                    type="text"
                    class="form-control"
                    id="CusName"
                    value={
                      selectedToken === null
                        ? ""
                        : selectedToken.customer.firstName
                    }
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="staticTel" class="col-sm col-form-label">
                  Mobile Number :
                </label>
                <div class="col-sm">
                  <input
                    readOnly
                    type="tel"
                    class="form-control"
                    id="tel"
                    value={
                      selectedToken === null
                        ? ""
                        : selectedToken.customer.telephone
                    }
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="staticAddress" class="col-sm col-form-label">
                  Address :
                </label>
                <div class="col-sm">
                  <textarea
                    readOnly
                    class="form-control"
                    id="address"
                    value={
                      selectedToken === null
                        ? ""
                        : selectedToken.customer.address
                    }
                  ></textarea>
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
                  ></textarea>
                </div>
              </div>

              <div class="form-group row">
                <label for="staticPaytype" class="col-sm col-form-label">
                  Payment Method :
                </label>
                <div class="col-sm">
                  <input
                    type="text"
                    class="form-control-plaintext"
                    name="payMethod"
                    value={
                      selectedToken === null
                        ? ""
                        : selectedToken.stringPayMethod
                    }
                  />
                </div>
              </div>
              <br />
              <br />
              <div class="form-group row">
                <div className="">
                  <Link to="/DashBoard">
                    <button className="btn btn-outline-success">Back</button>
                  </Link>
                </div>
                <div className="">
                  <input
                    type="submit"
                    className="btn btn-success ml-4"
                    value="Save Changes"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateDelivaryToken;
