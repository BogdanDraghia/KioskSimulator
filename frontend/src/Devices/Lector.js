
import "../styles/lector.css"
import Save from "../images/save.png"
import Settings from "../images/settings.png"
import Loading from "../components/Loading"
import LectorConfig from "./LectorConfig"
const Lector=(props)=> {
    return (

        <div className="boxDevice">
            {/* <div className="LoadingDevice">
                <Loading/>
            </div> */}
            <div className="upBoxDevice">
            <div className="deviceName">Lector</div>
            <div className="configAndStatus">
                <div className="stateDevice">
                 
                </div>
                <div className="settingsBox">
                    <img src={Settings} alt="settings"/>
                </div>
            </div>
            </div>
            <div className="subBoxDevice">
                <div className="code">
                <div>Code </div>
                <div className="input">
                <input type="text" id="fname" name="fname"/>
                <div className="save-button">
                    <img src={Save} alt="save"/>
                </div>
                </div>
                </div>

                <div className="trigger">
                    <div>Good Read </div>
                    <div className="button1">Send</div>
                </div> 
                <div className="trigger">
                    <div>Trigger on </div>
                    <div className="button1">Send</div>
                </div>    
                <div className="trigger">
                    <div>Trigger off </div>
                    <div className="button1">Send</div>
                </div> 
                <div className="statusBox">
                    Status lector : Reading 
                </div>  
            </div>

            <LectorConfig/>
        </div>
    )
  }
  
  export default Lector;
  