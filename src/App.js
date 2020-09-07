import React from 'react';

import HeaderBar from './components/HeaderBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePrescription } from '@fortawesome/free-solid-svg-icons'
import { faFileMedical } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'



function App() {
    return (
        <div className="container-fluid">
            <HeaderBar/>
            <div className="border border-success rounded-pill row mt-5" align="center" width="100%">
                
                <div className="col-sm">
                    <FontAwesomeIcon icon={faFilePrescription} size="4x"/>
                    <h3>Prescriptions</h3>
                    <h3>00</h3>
                    {/* counterVariable */}
                </div>
                <div className="col-sm">
                    <FontAwesomeIcon icon={faFileMedical} size="4x"/>
                    <h3>Orders</h3>
                    <h3>00</h3>
                    {/* counterVariable */}
                </div>
                <div className="col-sm">
                    <FontAwesomeIcon icon={faUsers} size="4x"/>
                    <h3>Customers</h3>
                    <h3>00</h3>
                    {/* counterVariable */}
                </div>
            </div>

        </div>
    );
}

export default App;
