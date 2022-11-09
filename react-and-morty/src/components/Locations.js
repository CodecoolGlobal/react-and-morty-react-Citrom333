import React, { useState } from 'react';
import locations from "./Img/locations.png"
import { useEffect } from 'react';

function Locations({ id, name, type, dimension, residents, reset }) {

    const [side, setSide] = useState("front");
    // useEffect(() => {
    //     console.log("useEffect")
    //     if (reset||!reset) {
    //         setSide("front")
    //     }
    //   }, [reset]);
    
  
  
    const flipImg = () => {
        side === "front" ? setSide("back") : setSide("front")
    }


    return (side === "front") ?

        <div onClick={flipImg} className="cards front" key={id}>
            <img
                height="300"
                src={locations}
                alt={name}
            />
            <h2>
                <span>Name: {name}</span><br />
                <span>Type: {type}</span><br />
            </h2>
        </div>
        :
        <div onClick={flipImg} className="cards back" key={id}>
            <h2>
                <span>Name: {name}</span><br />
                <span>Dimension: {dimension}</span><br />
                <span>Type: {type}</span><br />
                {/* <span>Residents: {residents}</span><br /> */}
            </h2>
        </div>
}


export default Locations;
