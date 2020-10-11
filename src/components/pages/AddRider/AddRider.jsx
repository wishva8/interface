import React from "react";

function AddRider() {
  return (
    <div>
      <br></br>
      <div class="container mb-5 mt-3">
        <br />
        <h1 align="center">Add Rider</h1>
        <hr />
        <form class="form-horizontal" action="/action_page.php">
          <div class="form-group">
            <label class="control-label col-sm-5" for="name">
              Full Name :{" "}
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter name"
                name="name"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-5" for="pwd">
              License No :
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="license"
                placeholder="Enter license no"
                name="license"
              />
            </div>
          </div>

          <div class="form-group">
            <label class="control-label col-sm-5" for="pwd">
              Id No :
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="Id"
                placeholder="Enter id no"
                name="Id"
              />
            </div>
          </div>

          <div class="form-group">
            <label class="control-label col-sm-5" for="pwd">
              Vehical :
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="vehical"
                placeholder="Enter vehical"
                name="vehical"
              />
            </div>
          </div>

          <div class="form-group">
            <label class="control-label col-sm-5" for="pwd">
              Vehical No :
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="vehicalNo"
                placeholder="Enter vehical no"
                name="vehicalNo"
              />
            </div>
          </div>

          <div class="form-group">
            <label class="control-label col-sm-5" for="pwd">
              Address :
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="Enter address"
                name="address"
              />
            </div>
          </div>

          <div class="form-group">
            <label class="control-label col-sm-5" for="pwd">
              Telephone No :
            </label>
            <div class="col-sm-10">
              <input
                type="tel"
                class="form-control"
                id="telephone"
                placeholder="Enter telephone no"
                name="telephone"
              />
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10 ">
              <div class="checkbox ">
                <label>
                  <input type="checkbox" name="remember" />
                  Save Rider Details
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10 ml-4" align="center">
              <button type="button" class="btn btn-success mb-5">
                Add Rider
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddRider;
