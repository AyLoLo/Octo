import React from "react";
import { useParams } from "react-router-dom";

function TravelerDetails(){

    const { yoshi } = useParams()

    return (
        <div>
            <h1>The Sacred Flame Awakens ... - {yoshi} </h1>
        </div>
    )
}

export default TravelerDetails;