import './Components/common.css'
import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { NavBar } from './Components/NavBar';
import { ClassVIII } from './Components/ClassVIII';
import { ClassIX } from './Components/ClassIX';
import { ClassX } from './Components/ClassX';

function App() {
  return (
    <div className="main">
      <h1 style={{textAlign:"left"}}>Welcome to Redux Tutorial</h1>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/8th' element={<ClassVIII/>}/>
        <Route path='/9th' element={<ClassIX/>}/>
        <Route path='/10th' element={<ClassX/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
