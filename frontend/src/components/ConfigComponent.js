function ConfigComponent(props) {
    if(props.renderdisplay !== true){
        return null
    }else{
        return (
            <div className="ConfigBox-elem">
                <p>{props.text}</p>
                <input type="text"/>
            </div>
        );
    }
  }
  
  export default ConfigComponent;
  