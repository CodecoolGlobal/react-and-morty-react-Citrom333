import React from "react";
import logo from "./logo/logo.png";

function Frontpage(props) {
    console.log(props)
    return <div className="frontPage">
        <div className="logoDiv"><img id={props.props.logoShrink? "shrink":"Logo"} src={logo} alt="rick and morty logo" onClick={props.props.logoProps}/></div>
        <button onClick={props.props.charButtonProps}>Characters</button>
        <button onClick={props.props.locButtonProps}>Locations</button>
       
    </div>
}

export default Frontpage;