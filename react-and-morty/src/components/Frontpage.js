import React from "react";
import logo from "./logo/logo.png";

function Frontpage(props) {
    return <div>
        {/* <img src={logo} alt="rick and morty logo" /> */}
        <button onClick={props.props}>Characters</button>
        <button onClick={props.props}>Locations</button>
        <div>
            <p>On this website, you can get more information about the fantastic multiverse of Rick and Morty</p>
        </div>
    </div>
}

export default Frontpage;