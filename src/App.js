import './index.css';
import { useState, useEffect} from "react";
import { Route, Routes, useNavigate} from "react-router-dom";

import Home from './Home';
import Header from './Header';
import OctoOne from './OctoOne';


function App() {

  const navigate = useNavigate()
  
  const [travelers, setTravelers] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:7000/travelers')
    .then(response => response.json())
    .then(travelerData =>setTravelers(travelerData))
  }, [])

  return (
    <div className='h-full w-full'>
      <div>
        <Header/>
      </div>
      <div>
        <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path="/OctopathTraveler" element={<OctoOne travelers={travelers}/>}/>
        </Routes>
      </div> 
    </div>
  );
  }
  
  export default App;
