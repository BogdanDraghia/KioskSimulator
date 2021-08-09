function ConfigComponent(props) {
    return (
        <div className="ConfigBox-elem">
            <p>{props.text}</p>
            <input type="text"/>
        </div>
    );
  }
  
  export default ConfigComponent;
  