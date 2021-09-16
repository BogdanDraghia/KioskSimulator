
import "../styles/lector.css"
import Save from "../images/save.png"
import React, { useState} from 'react';
import Settings from "../images/settings.png"
import Loading from "../components/Loading"
import LectorConfig from "../components/ConfigComponent"
import axios from 'axios';

const Lector=(props)=> {
    const [disableButton,setDisableButton] = useState(false)
    const [code,setCode] = useState("*123456*")
    const Button = (props)=>{
        return(
        <button
        onClick={()=>handleSendData(props.valueLector,code)}
        className="button1"
        disabled={props.disable}
        style={{backgroundColor:props.inactive}}
        >
            {props.children}
        </button>)
    }
    const handleSendData=(type,code)=>{
        setDisableButton(true)
        console.log("axios go start")
        console.log(type)
        console.log(code)
        axios.get(`http://127.0.0.1:5000/lectorsend?typeVal=${type}&&code=${code}`)
        .then(res => {
            console.log("resssection")
            setDisableButton(false)
            console.log(res)
        }).catch((err)=>{
            setDisableButton(false)
            console.log(err)
        })

        
    }

    const switchLector = ()=>{
        axios.get(`http://127.0.0.1:5000/lectorstart`).then((res)=>{
            console.log(res)
            console.log("start")
        }).catch((err)=>{
            console.log(err)
        })
    }
    
    let port = "1234"
    const [overlaySettings,setOverlaySettings] = useState(true)
    const [renderDisplay,setRenderDisplay]=useState(false)
    const overlaySettingsHandler = ()=>{
        setOverlaySettings(!overlaySettings)
    }
    return (

        <div className="boxDevice">
            {/* <div className="LoadingDevice">
                <Loading/>
            </div> */}
            <div className="upBoxDevice">
                <div className="deviceName">Lector : {port}</div>
                    <div className="configAndStatus">
                        <div className="stateDevice">
                        
                        </div>
                        {!overlaySettings ? 
                        <div className="settingsBox" onClick={()=>overlaySettingsHandler()}>
                            <img src={Settings} alt="settings"/>
                        </div>
                        :<div className="settingsExit" onClick={()=>overlaySettingsHandler()}>
                            <div className="leftExitSetting"></div>
                            <div className="rightExitSetting"></div>
                            </div>
                        }
                    </div>
            </div>
            <div className="subBoxDevice">
                {overlaySettings &&  
                <div className="overlaySettings">
                    
                    <div className="controlLectorStatus">
                        <div className="controlLectorStatusButton" style={{backgroundColor:"#6fd45b"}} onClick={()=>switchLector()}> ON </div>
                        <div className="controlLectorStatusButton" style={{backgroundColor:"#ff6b6b"}} onClick={()=>switchLector()}> OFF </div>
                    </div>
                     </div>}
                <div className="code">
                    <div>Code </div>
                        <div className="input">
                            <input type="text"
                            defaultValue={code} 
                            id="fname"
                            name="fname"
                            onChange={(elem) =>{
                                setCode(elem.target.value)
                                console.log(code)}
                              }
                            />
                            <div className="save-button">
                                <img src={Save} alt="save"/>
                            </div>
                    </div>
                </div>
                <div className="trigger">
                    <div valrr="bogdan" onClick={(elem)=>console.log(elem.target.getAttribute('valrr'))}>Good Read </div>
                    <Button disable={disableButton} inactive={disableButton ? "white":"#ff6b6b"} valueLector="GoodRead" >Send</Button>
                </div> 
                <div className="trigger">
                    <div>Trigger on </div>
                    <Button disable={disableButton} inactive={disableButton ? "white":"#ff6b6b"} valueLector="TriggerOn" onClick={(elem)=>handleSendData(elem)}>Send</Button>
                </div>    
                <div className="trigger">
                    <div>Trigger off </div>
                    <Button disable={disableButton} inactive={disableButton ? "white":"#ff6b6b"} valueLector="TriggerOff" onClick={(elem)=>handleSendData(elem)}>Send</Button>
                </div> 
                <div className="statusBox">
                    Status lector : Reading 
                </div>  
            </div>
            <LectorConfig renderdisplay={false}/>
        </div>
    )
  }
  
  export default Lector;
  