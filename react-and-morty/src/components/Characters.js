import React, { useState, useEffect} from 'react';


function Characters({ id, name, status, species, type, gender, image, reset}) {
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
                id="cardImg"
                height="300"
                src={image}
                alt={name}
            />
            <h2>
                <span>Name: {name}</span><br />
                <span>Species: {species}</span><br />
            </h2>
        </div>
        :
        <div onClick={flipImg} className="cards back" key={id}>
            <h2>
                <br/><span>Name: {name}</span><br />
                <span>Species: {species}</span><br />
                <span>Type: {type}</span><br />
                <span>Gender: {gender}</span><br />
                <span>Status: {status}</span><br />
            </h2>
        </div>
}

export default Characters;
