import Header from "../components/Header"
import ConfigComponent from "../components/ConfigComponent"
const LectorConfig=(props)=> {
    return (
        <div className="OverlayConfig">     
           <div className="OverlayBox">
               <h1>Config LECTOR</h1>
               <div className="popupBox">
                   <ConfigComponent text="ok"/>
               </div>
           </div>
           </div>

    )
  }
  
  export default LectorConfig;
  