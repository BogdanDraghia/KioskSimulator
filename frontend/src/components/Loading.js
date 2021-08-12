import "../styles/loading.css";
import React from 'react';

const Loading = (props) => {
  return (
      <div className="container-spinner">   
      <div id="spinner"></div>
      <div className="spinner-txt">{props.text}</div>
      </div>


  );
};

export default Loading;
