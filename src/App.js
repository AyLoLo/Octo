import './index.css';
import { useState, useEffect} from "react";
import { Link, Route, Routes, useNavigate} from "react-router-dom";

import Home from './Home';
import Header from './Header';
import OctoOne from './OctoOne';
import Traveler from './Traveler';


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

  return (
    <div className='h-full w-full'>
      <div>
        <Header/>
      </div>
      <div>
        <Routes>
          {travelers.map(traveler => (<Link to={'travelers/'+ traveler.id}/>))}
          <Route path="/" element={<Home/>}/>
          <Route path="/Octopath_Traveler" element={<OctoOne travelers={travelers}/>}/>
        </Routes>
      </div> 
    </div>
  );
  }
  
  export default App;
