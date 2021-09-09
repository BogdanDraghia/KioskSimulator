import React, { useState} from 'react';
const Header=(props)=> {
    return (

        <div className="centerSection">
            <div className="Header">
                <div className="version">
                    Kiosk simulator v1.0
                </div>

                <div className="status"> 
                <p className="logs"> Ip:{props.ip}</p>
                    <div className="logs">Show logs</div>
                    <p>Status backend</p>
                    <div className="boxStatus"/>
                </div>

            </div>          
        </div>
    )
    
  }
  
  export default Header;
  