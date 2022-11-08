import React from "react";
import logo from "./Img/logo.png";

function Frontpage(props) {
    console.log(props)
    return <div className="frontPage">
        <button id="charBtn" onClick={props.props.charButtonProps}>Characters</button>
        <div className="logoDiv"><img id={props.props.logoShrink ? "shrink" : "Logo"} src={logo} alt="rick and morty logo" onClick={props.props.logoProps} /></div>
        <button id="locBtn" onClick={props.props.locButtonProps}>Locations</button>
    </div>
}

export default Frontpage;