import "../styles/scale.css"
import socketIOClient from "socket.io-client";
import React, { useEffect, useState } from "react";
import Settings from "../images/settings.png"
import Save from "../images/save.png"
const Screen= (props)=> {
    const[defaultIp,setDefaultIp]=useState("127.0.0.1")
    const[data,setData]=useState("")
    const[stateDevice,setStateDevice] =useState(false)

    useEffect(() => {
        const socket = socketIOClient("http://127.0.0.1:5000/");
        socket.on("data", (data) => {
            setData(data)
            setStateDevice(true)
          console.log("ok")
        });
        socket.on('disconnect', function(){
            setStateDevice(false)
            setData("")
        });
        return () => socket.disconnect();
      }, []);


    return(
       <div className="boxDevice">
            {/* <div className="LoadingDevice">
                <Loading/>
            </div> */}
            <div className="upBoxDevice">
            <div className="deviceName">Screen</div>
            <div className="configAndStatus">
                <div className="stateDevice" style={ !stateDevice ? { backgroundColor:'red' }: { backgroundColor:'blue' }}>
                </div>
                <div className="settingsBox">
                    <img src={Settings} alt="settings"/>
                </div>
            </div>
            </div>
            <div className="subBoxDevice">
                <div className="adress">
                    <div>Ip : </div>
                    <div className="input">
                    <input type="text" id="fname" name="fname"/>
                    <div className="save-button">
                        <img src={Save} alt="save"/>
                    </div>
                    </div>
                </div>
                <div className="adress">
                    <div>Port : </div>
                    <div className="input">
                    <input type="text" id="fname" name="fname"/>
                    <div className="save-button">
                        <img src={Save} alt="save"/>
                    </div>
                    </div>
                </div>
                <div className="data">
                {Object.keys(data).map((ress)=>(
                  <div>{ress}: {data[ress]}</div>
                ))}
                </div>
                
            </div>

        </div>
    
    )
  }
  
  export default Screen;
  