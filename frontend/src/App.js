import "./App.css";

import React, { useEffect, useState } from "react";
import DeviceLayout from "./Layout/DeviceLayout";
import Lector from "./Devices/Lector"
import socketIOClient from "socket.io-client";
import Layout from "./Layout/Layout";
import Scale from "./Devices/Scale";
import Screen from "./Devices/Screen"
const App= ()=> {
  //let endpoint = "http://127.0.0.1:3000/"
  const [LayoutConfig,setLayoutConfig]=useState({
    scale:true,
    screen:true,
    scale:true,
    anpr:true
  })
  console.log(LayoutConfig.scale)
  useEffect(() => {
    const socket = socketIOClient("http://127.0.0.1:5000/");
    socket.on("data", (data) => {
      
      console.log("ok")
    });
    return () => socket.disconnect();
  }, []);
  return (
    <div className="App">
      <Layout>
        <DeviceLayout>
         {/* <Lector/>
         <Scale/>
         <Screen/> */}
         <div className="test1">
           <div className="test1sub">
              <Lector/>
           </div>
         </div>
         <div className="test2">
         <div className="test1sub">
              <Lector/>
           </div>
         </div>
         <div className="test3">
         test3
         </div>
         <div className="test4">
           <div className="test4-left">
           test3
           </div>
           <div className="test4-right">
           test4
           </div>
         </div>
        </DeviceLayout>
      </Layout>
      </div>
  );
}

export default App;
