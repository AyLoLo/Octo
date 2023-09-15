import './index.css';
import { useState, useEffect} from "react";
import { Link, Route, Routes, useNavigate} from "react-router-dom";

import Home from './Home';
import Header from './Header';
import OctoOne from './OctoOne';
import Traveler from './Traveler';
import TravelerDetails from './TravelerDetails';


function App() {

  const navigate = useNavigate()
  
  const [travelers, setTravelers] = useState([])

  const [focusTraveler, setFocusTraveler] = useState('')

  useEffect(() => {
    fetch('http://127.0.0.1:7000/travelers')
    .then(response => response.json())
    .then(travelerData =>setTravelers(travelerData))
  }, [])

  const traveler = travelers.map(traveler => {
    return traveler 
  })

  function InquireTraveler(event){
    setFocusTraveler(event.target.id)
    navigate("/Octopath_Traveler/:yoshi")
  }

  return (
    <div className='h-full w-full'>
      <div>
        <Header/>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Octopath_Traveler" element={<OctoOne travelers={travelers} InquireTraveler={InquireTraveler}/>}/>
          <Route path="/Octopath_Traveler/:yoshi" element={<TravelerDetails/>}/>
        </Routes>
      </div> 
    </div>
  );
  }
  
  export default App;
