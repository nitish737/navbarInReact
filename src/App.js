
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom" ;

function App() {
  const [navActive, setNavActive] = useState(false) ;
  return (
    <>
      <Navbar navActive={navActive} setNavActive = {setNavActive}/>

      <Routes>
        <Route exact path = "/" component={Navbar} />
      </Routes>

    </>
  );
}





export default App;