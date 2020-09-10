import React from "react";
// import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import UpdateDelivaryToken from 'C:/Users/vibus/OneDrive/Desktop/ITPproject/interface/src/components/pages/UpdateDelivaryToken/UpdateDelivaryToken'
import {Link} from 'react-router-dom'
function DelivaryTokenDetails() {
  return (

    <div>
      <div className="row">
        <div className="col-sm border border-success rounded m-5">
          <div align="center">
            <label for="tokenNo">001{/*set token variable*/}</label>
            <div>
              <label for="orderStatus">Processing</label>
            </div>
            <hr />
          </div>
          <div>
            <label for="OrderNo">Order Number : 001</label>
          </div>
          <div>
            <label for="cusName">Customer Name : Wishva Perera</label>
          </div>
          <div>
            <label fro="address">Address : 519/C, Aggona, Mulleriyawa</label>
          </div>
          <div>
            <label for="cusTel">Mobile Number : 0771730317</label>
          </div>
          <div align="right">
            <a href="#">
              <FontAwesomeIcon icon={faEye} color="black" className="mr-2" />
            </a>
            <Link to="/UpdateDelivaryToken">
              <FontAwesomeIcon icon={faEdit} color="black" className="mr-2" />
              </Link>
            <a href="#">
              <FontAwesomeIcon
                icon={faTrash}
                color="black"
                className="mr-2"
                data-toggle="modal"
                data-target="#myModal1"
              /></a>

              <div class="modal fade" id="myModal1" role="dialog">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 className="modal-title">Are you sure?</h4>
                      <button type="button" class="close" data-dismiss="modal">
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
                      <button type="button" class="btn btn-danger">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            
          </div>
        </div>

        <div className="col-sm border border-success rounded m-5">
          <div align="center">
            <label for="tokenNo">002{/*set token variable*/}</label>
            <div>
              <label for="orderStatus">Processing</label>
            </div>
            <hr />
          </div>
          <div>
            <label for="OrderNo">Order Number : 002</label>
          </div>
          <div>
            <label for="cusName">Customer Name : Wishva Perera</label>
          </div>
          <div>
            <label fro="address">Address : 519/C, Aggona, Mulleriyawa</label>
          </div>
          <div>
            <label for="cusTel">Mobile Number : 0771730317</label>
          </div>
          <div align="right">
            <a href="#">
              <FontAwesomeIcon icon={faEye} color="black" className="mr-2" />
            </a>
            <Link to="/UpdateDelivaryToken">
              <FontAwesomeIcon icon={faEdit} color="black" className="mr-2" />
              </Link>
            <a href="#">
              <FontAwesomeIcon
                icon={faTrash}
                color="black"
                className="mr-2"
                data-toggle="modal"
                data-target="#myModal2"
              /></a>

              <div class="modal fade" id="myModal2" role="dialog">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 className="modal-title">Are you sure?</h4>
                      <button type="button" class="close" data-dismiss="modal">
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
                      <button type="button" class="btn btn-danger">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            
          </div>
        </div>

        <div className="col-sm border border-success rounded m-5">
          <div align="center">
            <label for="tokenNo">003{/*set token variable*/}</label>
            <div>
              <label for="orderStatus">Processing</label>
            </div>
            <hr />
          </div>
          <div>
            <label for="OrderNo">Order Number : 003</label>
          </div>
          <div>
            <label for="cusName">Customer Name : Wishva Perera</label>
          </div>
          <div>
            <label fro="address">Address : 519/C, Aggona, Mulleriyawa</label>
          </div>
          <div>
            <label for="cusTel">Mobile Number : 0771730317</label>
          </div>
          <div align="right">
            <a href="#">
              <FontAwesomeIcon icon={faEye} color="black" className="mr-2" />
            </a>
            <Link to="/UpdateDelivaryToken">
              <FontAwesomeIcon icon={faEdit} color="black" className="mr-2" />
              </Link>
            <a href="#">
              <FontAwesomeIcon
                icon={faTrash}
                color="black"
                className="mr-2"
                data-toggle="modal"
                data-target="#myModal3"
              /></a>

              <div class="modal fade" id="myModal3" role="dialog">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 className="modal-title">Are you sure?</h4>
                      <button type="button" class="close" data-dismiss="modal">
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
                      <button type="button" class="btn btn-danger">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            
          </div>
        </div>

        <div className="col-sm border border-success rounded m-5">
          <div align="center">
            <label for="tokenNo">004{/*set token variable*/}</label>
            <div>
              <label for="orderStatus">Processing</label>
            </div>
            <hr />
          </div>
          <div>
            <label for="OrderNo">Order Number : 004</label>
          </div>
          <div>
            <label for="cusName">Customer Name : Wishva Perera</label>
          </div>
          <div>
            <label fro="address">Address : 519/C, Aggona, Mulleriyawa</label>
          </div>
          <div>
            <label for="cusTel">Mobile Number : 0771730317</label>
          </div>
          <div align="right">
            <a href="#">
              <FontAwesomeIcon icon={faEye} color="black" className="mr-2" />
            </a>
            <Link to="/UpdateDelivaryToken">
              <FontAwesomeIcon icon={faEdit} color="black" className="mr-2" />
              </Link>
            <a href="#">
              <FontAwesomeIcon
                icon={faTrash}
                color="black"
                className="mr-2"
                data-toggle="modal"
                data-target="#myModal4"
              /></a>

              <div class="modal fade" id="myModal4" role="dialog">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 className="modal-title">Are you sure?</h4>
                      <button type="button" class="close" data-dismiss="modal">
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
                      <button type="button" class="btn btn-danger">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default DelivaryTokenDetails;
