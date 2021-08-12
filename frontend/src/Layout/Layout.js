import Header from "../components/Header"
import React from 'react';

const Layout=(props)=> {
    return (
     <div> 
      <Header/>
      {props.children}
    </div>
    )
  }
  
  export default Layout;
  