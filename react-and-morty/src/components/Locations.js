import React, { useState } from 'react';
import locations from "./locations.png"
function Locations({ id, name, type, dimension, residents }) {

    // const [showMore, setShowMore] = useState(false);

    // function handleMoreClick() {
    //     setShowMore(!showMore);
    // }

    return <>
        <div className="cards" key={id}>
        <img
                height="300"
                src={locations}
                alt={name}
            />
            <h2>
                {/* <span>Id: {id}</span><br /> */}
                <span>Name: {name}</span><br />
                <span>Type: {type}</span><br />
            </h2>
        </div>
        {/* <div className="characters">
            <button className="btn" onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <span>{description}</span>}
        </div> */}

    </>
}

export default Locations;
