
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
        })

        
    }

    const [renderDisplay,setRenderDisplay]=useState(false)

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
                    <Button disable={disableButton} inactive={disableButton ? "white":"red"} valueLector="GoodRead" >Send</Button>
                </div> 
                <div className="trigger">
                    <div>Trigger on </div>
                    <Button disable={disableButton} inactive={disableButton ? "white":"red"} valueLector="TriggerOn" onClick={(elem)=>handleSendData(elem)}>Send</Button>
                </div>    
                <div className="trigger">
                    <div>Trigger off </div>
                    <Button disable={disableButton} inactive={disableButton ? "white":"red"} valueLector="TriggerOff" onClick={(elem)=>handleSendData(elem)}>Send</Button>
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
  