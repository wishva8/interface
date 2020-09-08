import React from "react";
import "./createToken.css";

function CreateDeilivaryToken() {
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
          <div className="row mb-3">
            Order Number : 001
            <br />
            Customer Name : wishva perera
            <br />
            Mobile Name : 0777123456
            <br />
            address : 225/B, Malabe, Colombo
            <br />
          </div>
          <div className="row mb-3">
            Order Number : 001
            <br />
            Customer Name : wishva perera
            <br />
            Mobile Name : 0777123456
            <br />
            address : 225/B, Malabe, Colombo
            <br />
          </div>
          <div className="row mb-3">
            Order Number : 002
            <br />
            Customer Name : wishva perera
            <br />
            Mobile Name : 0777123456
            <br />
            address : 225/B, Malabe, Colombo
            <br />
          </div>
          <div className="row mb-3">
            Order Number : 003
            <br />
            Customer Name : wishva perera
            <br />
            Mobile Name : 0777123456
            <br />
            address : 225/B, Malabe, Colombo
            <br />
          </div>
          <div className="row mb-3">
            Order Number : 004
            <br />
            Customer Name : wishva perera
            <br />
            Mobile Name : 0777123456
            <br />
            address : 225/B, Malabe, Colombo
            <br />
          </div>
          <div className="row mb-3">
            Order Number : 005
            <br />
            Customer Name : wishva perera
            <br />
            Mobile Name : 0777123456
            <br />
            address : 225/B, Malabe, Colombo
            <br />
          </div>
          <div className="row mb-3">
            Order Number : 006
            <br />
            Customer Name : wishva perera
            <br />
            Mobile Name : 0777123456
            <br />
            address : 225/B, Malabe, Colombo
            <br />
          </div>
        </div>
        <div className="border border-success col-sm rounded m-5 column">
          <h5 align="center" className="m-2 mb-4">
            Create Delivaly Token
          </h5>
          <form>
            <div class="form-group row">
              <label for="staticToken" class="col-sm col-form-label">
                Token Number :
              </label>
              <div class="col-sm">
                <input
                  type="text"
                  readonly
                  class="form-control-plaintext"
                  id="staticEmail"
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
                  <option value="none">Select</option>
                  <option value="option1">option1</option>
                  <option value="option2">option2</option>
                  <option value="option3">option3</option>
                  <option value="option4">option4</option>
                </select>
              </div>
            </div>

            <div class="form-group row">
              <label for="staticToken" class="col-sm col-form-label">
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
              <label for="staticToken" class="col-sm col-form-label">
                Customer Name :
              </label>
              <div class="col-sm">
                <input type="text" class="form-control" id="staticEmail" />
              </div>
            </div>

            <div class="form-group row">
              <label for="staticToken" class="col-sm col-form-label">
                Mobile Number :
              </label>
              <div class="col-sm">
                <input type="tel" class="form-control" id="staticEmail" />
              </div>
            </div>

            <div class="form-group row">
              <label for="staticToken" class="col-sm col-form-label">
                Address :
              </label>
              <div class="col-sm">
                <textarea class="form-control" id="staticEmail" />
              </div>
            </div>

            <div class="form-group row">
              <label for="staticToken" class="col-sm col-form-label">
                Item Description :
              </label>
              <div class="col-sm">
                <textarea class="form-control" id="staticEmail" />
              </div>
            </div>

            <div class="form-group row">
              <label for="staticToken" class="col-sm col-form-label">
                Item Description :
              </label>
              <div class="col-sm">
                <input
                  type="text"
                  readonly
                  class="form-control-plaintext"
                  id="staticEmail"
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
                <button className="btn btn-outline-success">Save</button>
              </div>
              <div className="">
                <input
                  type="submit"
                  className="btn btn-success"
                  value="Save & Print"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateDeilivaryToken;
