import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './HeaderBarSt.css'


function HeaderBar(){
    return (
   
        <div className="container-fulid">
            <div className="row" width="100%">
                <div className="col-sm">
                    <img src="logo.png" alt="logo" className="rounded" width="200" ></img>
                </div>

                <div className="col-sm mt-4" align="center">
                    <form action="" method="get">
                        <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
                        <input type="submit" style="display:none"/>
                    </form>
                </div>


                <div className="col-sm mt-4" align="right">
                    <FontAwesomeIcon icon={faUser} size="2x" className="mr-5"/>
                    <FontAwesomeIcon icon={faShoppingCart} size="2x" className="mr-4"/>
                </div>
            </div>

            <div>
                
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand">Home</span>
                <span className="navbar-brand">Store</span>
                <span className="navbar-brand">Service</span>
                <span className="navbar-brand">Contact Us</span>
                <span className="navbar-brand">About</span>
                <span className="navbar-brand">Login</span>
            </nav>


            </div>
            
        
        </div>

    );
}

export default HeaderBar;