import React, { Component } from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
// import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import UpdateDelivaryToken from "C:/Users/vibus/OneDrive/Desktop/ITPproject/interface/src/components/pages/UpdateDelivaryToken/UpdateDelivaryToken";
import { Link } from "react-router-dom";
import { axios } from "axios";

class DelivaryTokenDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      tokens: [],
    };
  }

  state = {
    deletedId: 0,
  };
  onChange(e) {
    this.setState({ deletedId: e });
  }
  onEdit(e) {
    localStorage.setItem("token", e);
  }

  delete() {
    fetch("http://localhost:5000/api/Tokens/" + this.state.deletedId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      this.getTokens();
    });
  }

 
  getTokens = (e) => {
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
  };
  componentDidMount() {
    this.getTokens();
  }


  render() {
    const { error, isLoaded, tokens } = this.state;
    return (
      <div>
        <h2 className="mt-5" align="center">
          Delivary Token Details
        </h2>
        <div className="row">
          {tokens.map((token) => (
            <div className="col-sm-3 border border-success rounded m-5">
              <div align="center">
                <label for="tokenNo">{token.id}</label>
                <div>
                  <label for="orderStatus">{token.stringStatus}</label>
                </div>
                <hr />
              </div>
              <div>
                <label for="OrderNo">Order Number : {token.orderID}</label>
              </div>
              <div>
                <label for="cusName">
                  Customer Name : {token.customer.firstName}{" "}
                  {token.customer.lastName}
                </label>
              </div>
              <div>
                <label fro="address">Address : {token.customer.address}</label>
              </div>
              <div>
                <label for="cusTel">
                  Mobile Number : {token.customer.telephone}
                </label>
              </div>
              <div align="right">
                <a href="#">
                  <FontAwesomeIcon
                    icon={faEye}
                    color="black"
                    className="mr-2"
                  />
                </a>
                <Link to="/UpdateDelivaryToken" >
                <a href="#" onClick={this.onEdit.bind(this, token.id)}>
                  <FontAwesomeIcon
                    icon={faEdit}
                    color="black"
                    className="mr-2"
                  />
                </a>
                </Link>
                <a href="#" onClick={this.onChange.bind(this, token.id)}>
                  <FontAwesomeIcon
                    icon={faTrash}
                    color="black"
                    className="mr-2"
                    data-toggle="modal"
                    data-target="#myModal1"
                  />
                </a>

                <div class="modal fade" id="myModal1" role="dialog">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h4 className="modal-title">Are you sure?</h4>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                        >
                          &times;
                        </button>
                      </div>
                      <div class="modal-body">
                        <p align="left">Do you want delete Delivary Token.</p>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-default"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger"
                          onClick={this.delete.bind(this)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     deliveryTokenList: state.deliveryToken.list,
//   };
// };

// const mapActionToProps = {
//   fetchAllToken: action.fetchAll,
// };connect(mapStateToProps, mapActionToProps)

export default DelivaryTokenDetails;
