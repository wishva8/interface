import React from "react";

// import "./createToken.css";

class UpdateDelivaryToken extends React.Component {
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
  submitEdit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/Tokens", {
      method: "PUT",
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
  //////////////////////////
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      tokens: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/api/Tokens", {
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
            tokens: result,
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
    const { error, isLoaded, tokens } = this.state;
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
                Customer Name : {token.customer.firstName} {token.customer.lastName}
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
                    readonly
                    class="form-control-plaintext"
                    id="staticToken"
                    value="001"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="selectOrder" class="col-sm col-form-label">
                  Order Number :
                </label>
                <div class="col-sm">
                  <select name="Orders" className="col-" id="Orders">
                    <option value="none">001</option>
                    <option value="option1">option1</option>
                    <option value="option2">option2</option>
                    <option value="option3">option3</option>
                    <option value="option4">option4</option>
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
                    type="text"
                    class="form-control"
                    id="CusName"
                    value="Wishva Perera"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="staticTel" class="col-sm col-form-label">
                  Mobile Number :
                </label>
                <div class="col-sm">
                  <input
                    type="tel"
                    class="form-control"
                    id="tel"
                    value="0771234567"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="staticAddress" class="col-sm col-form-label">
                  Address :
                </label>
                <div class="col-sm">
                  <textarea class="form-control" id="address">
                    225/B, Malabe, Colombo
                  </textarea>
                </div>
              </div>

              <div class="form-group row">
                <label for="staticItemDesc" class="col-sm col-form-label">
                  Item Description :
                </label>
                <div class="col-sm">
                  <textarea class="form-control" id="itemDesc">
                    Keep dry
                  </textarea>
                </div>
              </div>

              <div class="form-group row">
                <label for="staticPaytype" class="col-sm col-form-label">
                  Payment Method :
                </label>
                <div class="col-sm">
                  <input
                    type="text"
                    readonly
                    class="form-control-plaintext"
                    id="paytype"
                    value="cash on delivary"
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
