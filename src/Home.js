import React from "react";
import SnowBG from "./assets/SnowBG.jpg";
import Logo1 from "./assets/Logo1.png";
import Logo2 from "./assets/Logo2.png";
import ChampionsLogo from "./assets/ChampionsLogo.png";


function Home(){
    return (
        <div className="grid grid-rows-8">
            <div className="text-white flex p-10 justify-center row-span-3">
                <img className="h-80" src={SnowBG} alt="Snow Escape"/>
            </div>
            <div className="bg-blue-300 text-center p-5">
                <span className="text-black text-2xl italic font-semibold">The Sacred Flame Awakens...</span>
            </div>
            <div className="grid grid-cols-3 row-span-3">
                <a href="/OctopathTraveler" className="flex justify-center m-20">
                    <img className="w-96"src={Logo1} alt="Octopath Traveler"/>
                </a>
                <div className="flex justify-center p-10">
                    <img className="w-96" src={Logo2} alt="Octopath Traveler II"/>
                </div>
                <div className="flex justify-center p-10">
                    <img className="w-96" src={ChampionsLogo} alt="Champions Of The Continent"/>
                </div>
            </div>
        </div>
    )
}

export default Home;