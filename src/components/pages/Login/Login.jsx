import React from "react";
import "./Login.css";

import { Link } from "react-router-dom";


function Login() {

 return (

  <div>

   <div>
    <div class="container-fluid" className="bgImg" >
     <div class="row no-gutter">

    <div class="col-md-6 d-none d-md-flex bg-image"></div>
   
      <div class="col-md-6 bg-light">
       <div class="login d-flex align-items-center py-5">


        <div class="container resize-container">
         <div class="row mt-5">
          <div class="col-lg-10 col-xl-7 mx-auto">
           <h4 class="display-4 logName">Login</h4><br></br>
      
           <form>
            <div class="form-group mb-3">
             <input id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
            </div>
            <div class="form-group mb-3">
             <input id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
            </div>
            <div class="custom-control custom-checkbox mb-3">
             <input id="customCheck1" type="checkbox" checked class="custom-control-input" />
             <label for="customCheck1" class="custom-control-label">Remember password</label>
            </div>

          <div className="mt-0">
          <span class="psw"><a href="#">Forgot password?</a></span>
          </div>
          
            <Link to="/DashBoard"><button type="submit" class="btn btn-success btn-block text-uppercase mb-2 rounded-pill shadow-sm mt-4">Sign in</button></Link>

           </form>
          </div>
         </div>
        </div>

       </div>
      </div>

     </div>
    </div>


   </div>

  </div >

 );

}

export default Login;