import React from "react";


function Home(){
    return (
        <div className="grid grid-rows-2">
            <div>
                The Title
            </div>
            <div className="grid grid-cols-3">
                <div>
                    Octo Uno
                </div>
                <div>
                    Octo Dos
                </div>
                <div>
                    Champions
                </div>
            </div>
        </div>
    )
}

export default Home;