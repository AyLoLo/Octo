import React from "react";
import Traveler from "./Traveler";

function OctoOne(travelers){

    const oneTravelers = travelers.filter((traveler) => {
        if(traveler.game_origin === "Octopath Traveler"){
            return true 
        } else {
            return null 
        }
    })
    
    const oneTraveler = oneTravelers.map(traveler => {
        return <Traveler traveler={traveler} key={traveler.id}/>
    })

    return (
        <div className="text-white">
            {oneTraveler}
        </div>       
    )
}

export default OctoOne;