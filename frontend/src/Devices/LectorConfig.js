import Header from "../components/Header"
import ConfigComponent from "../components/ConfigComponent"
const LectorConfig=(props)=> {
    if(props.renderdisplay === true ){
        return (
            <div className="OverlayConfig">     
               <div className="OverlayBox">
                   <h1>Config LECTOR</h1>
                   <div className="popupBox">
                       <ConfigComponent text="ok" renderdisplay={false}/>
                   </div>
               </div>
               </div>
    
        )
    }else{
        return null
    }
  }
  
  export default LectorConfig;
  