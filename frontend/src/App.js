import "./App.css";

import React, { useEffect, useState } from "react";
import Device from "./components/Device";
import Lector from "./Devices/Lector"
import socketIOClient from "socket.io-client";
import Layout from "./Layout/Layout";
const App= ()=> {
  //let endpoint = "http://127.0.0.1:3000/"
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
         <Device />
         <Lector/>
      </Layout>
      </div>
  );
}

export default App;
