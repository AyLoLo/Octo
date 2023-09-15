import React from "react";

function Traveler({traveler}){
    
    return (
        <div className="md:border-4 border-white flex justify-center items-center bg-black">
            <div>    
                <img src={traveler.sprite_image} alt={traveler.first_name}/>
            </div>
            <span className="text-white">
                {traveler.first_name} {traveler.last_name}
            </span>
        </div>
    )
}

export default Traveler;