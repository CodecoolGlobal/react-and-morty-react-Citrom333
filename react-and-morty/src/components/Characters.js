import React, { useState } from 'react';


function Characters({ id, name, status, species, type, gender, image }) {
    const [side, setSide] = useState("front");

    const flipImg = () => {
        side === "front" ? setSide("back") : setSide("front")
    }


    return (side === "front") ?
        <div onClick={flipImg} className="cards front" key={id}>
            <img
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
                <span>Name: {name}</span><br />
                <span>Species: {species}</span><br />
                <span>Type: {type}</span><br />
                <span>Gender: {gender}</span><br />
                <span>Status: {status}</span><br />
            </h2>
        </div>
}

export default Characters;
