import './index.css';
import { Route, Routes, useNavigate} from "react-router-dom";

import Home from './Home';
import Header from './Header';

function App() {
  return (
    <div className='h-full w-full'>
      <div>
        <Header/>
      </div>
      <div>
        <Routes> 
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div> 
    </div>
  );
  }
  
  export default App;
