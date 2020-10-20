import React from "react";

// import "./createToken.css";

class UpdateDelivaryToken extends React.Component {
  state = {
    orderID: 0,
    description: "",
    urgent: false,
    payMethod: 0,
    status:0
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onCheckboxValueChange = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };
  submitEdit = (e) => {
    e.preventDefault();
    let tokenId = localStorage.getItem("token");

    fetch("http://localhost:5000/api/Tokens/" + tokenId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: Number(this.state.orderID),
        urgent: this.state.urgent,
        description: this.state.description,
        payMethod: Number(this.state.payMethod),
        status:Number(this.state.status)
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
    const { error, isLoaded, tokens, selectedToken, orders } = this.state;
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
                    name="payMethod"
                    onChange={this.onChange}
                    value={selectedToken === null ? "" : selectedToken.status}
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
                    <input type="checkbox" />
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
                    id="itemDesc"
                    onChange={this.onChange}
                    value={
                      selectedToken === null ? "" : selectedToken.description
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
                    id="paytype"
                    onChange={this.onChange}
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
                  <button className="btn btn-outline-success">Cancel</button>
                </div>
                <div className="">
                  <input
                    type="submit"
                    className="btn btn-success ml-4"
                    value="Save Changers"
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
