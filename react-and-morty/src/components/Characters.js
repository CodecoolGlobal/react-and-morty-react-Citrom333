import React, { useState } from 'react';

function Characters({ id, name, status, species, type, gender, image }) {

    // const [showMore, setShowMore] = useState(false);

    // function handleMoreClick() {
    //     setShowMore(!showMore);
    // }

    return <>
        <div className="characters">
            <img
                height="300"
                src={image}
                alt={name}
            />
            <h2>
                <span>Id: {id}</span><br />
                <span>Name: {name}</span><br />
                <span>Species: {species}</span><br />
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

export default Characters;
