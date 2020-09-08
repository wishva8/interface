import React from 'react';

import HeaderBar from './components/HeaderBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePrescription } from '@fortawesome/free-solid-svg-icons'
import { faFileMedical } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'



function App() {
    return (
        <div className="">
            <HeaderBar/>
            <div className="border border-success rounded-pill row mt-5 ml-5 mr-5" align="center" width="100%">
                
                <div className="col-sm">
                    <FontAwesomeIcon icon={faFilePrescription} size="4x"/>
                    <h4>Prescriptions</h4>
                    <h4>00</h4>
                    {/* counterVariable */}
                </div>
                <div className="col-sm">
                    <FontAwesomeIcon icon={faFileMedical} size="4x"/>
                    <h4>Orders</h4>
                    <h4>00</h4>
                    {/* counterVariable */}
                </div>
                <div className="col-sm">
                    <FontAwesomeIcon icon={faUsers} size="4x"/>
                    <h4>Customers</h4>
                    <h4>00</h4>
                    {/* counterVariable */}
                </div>
            </div>

        </div>
    );
}

export default App;
