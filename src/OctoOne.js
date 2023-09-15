import React from "react";
import Traveler from "./Traveler";

function OctoOne({travelers}){

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
        <div className="bg-[url('https://images5.alphacoders.com/931/thumb-1920-931888.jpg')] bg-center bg-no-repeat mt-20">    
            <div className="grid grid-rows-4 grid-cols-2 gap-10 p-10">
                {oneTraveler}
            </div>
        </div>       
    )
}

export default OctoOne;