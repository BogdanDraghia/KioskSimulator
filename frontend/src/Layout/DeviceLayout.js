import "../styles/DeviceLayout.css"
import React from 'react';

function DeviceLayout(props) {
  return (
  <div className="DeviceLayout">
    {props.children}
  </div>)
}

export default DeviceLayout;
