import React from "react";
import logo from "./logo/logo.png";

function Frontpage(props) {
    console.log(props)
    return <div>
        <img src={logo} height="300" alt="rick and morty logo" onClick={props.props.logoProps}/> 
        <button onClick={props.props.charButtonProps}>Characters</button>
        <button onClick={props.props.locButtonProps}>Locations</button>
       
    </div>
}

export default Frontpage;