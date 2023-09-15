import React from "react";

function Header(){

    return(
        <header className="grid-cols-2">
            <h1></h1>
            <nav className="text-white flex justify-evenly">
                <a href="/"> Home </a>
                <a href=""> Octopath Traveler</a>
                <a href=""> Octopath Traveler II</a>
                <a href=""> Champions Of The Continent</a>
            </nav>    
        </header>
    )
}

export default Header;