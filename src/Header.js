import React from "react";


function Header(){

    return(
        <header className="p-2">
            <nav className="text-white flex justify-evenly">
                <a href="/"> Home </a>
                <a href="/Octopath_Traveler"> Octopath Traveler</a>
                <a href=""> Octopath Traveler II</a>
                <a href=""> Champions Of The Continent</a>
            </nav>    
        </header>
    )
}

export default Header;