import React from "react";
import "./Login.css";
import { History } from "history";

import { useHistory, Redirect, withRouter } from "react-router-dom";

class Login extends React.Component {
  
  state = {
    userEmail: "",
    userPassword: "",
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //login submit
  submitLogin = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/Customers/Login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.userEmail,
        password: this.state.userPassword,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          localStorage.setItem("user", res.id);

          this.props.history.push("/DashBoard");
        }
        else{
          alert('Please Enter Correct Password')
        }
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <div>
          <div class="container-fluid" className="bgImg">
            <div class="row no-gutter">
              <div class="col-md-6 d-none d-md-flex bg-image"></div>

              <div class="col-md-6 bg-light">
                <div class="login d-flex align-items-center py-5">
                  <div class="container resize-container">
                    <div class="row mt-5">
                      <div class="col-lg-10 col-xl-7 mx-auto">
                        <h4 class="display-4 logName">Login</h4>
                        <br></br>

                        <form onSubmit={this.submitLogin}>
                          <div class="form-group mb-3">
                            <input
                              type="email"
                              placeholder="Email address"
                              required
                              autofocus=""
                              class="form-control rounded-pill border-0 shadow-sm px-4"
                              onChange={this.onChange}
                              value={this.state.userEmail}
                              name="userEmail"
                            />
                          </div>
                          <div class="form-group mb-3">
                            <input
                              type="password"
                              placeholder="Password"
                              required
                              class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                              onChange={this.onChange}
                              value={this.state.userPassword}
                              name="userPassword"
                            />
                          </div>
                          <div class="custom-control custom-checkbox mb-3">
                            <input
                              id="customCheck1"
                              type="checkbox"
                              checked
                              class="custom-control-input"
                            />
                            <label
                              for="customCheck1"
                              class="custom-control-label"
                            >
                              Remember password
                            </label>
                          </div>

                          <div className="mt-0">
                            <span class="psw">
                              <a href="#">Forgot password?</a>
                            </span>
                          </div>

                          <button
                            type="submit"
                            class="btn btn-success btn-block text-uppercase mb-2 rounded-pill shadow-sm mt-4"
                          >
                            Sign in
                          </button>
                        </form>
                      </div>
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
}

export default withRouter(Login);
