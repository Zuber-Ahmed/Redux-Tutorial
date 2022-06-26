import './Components/common.css'
import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { NavBar } from './Components/NavBar';
import { ClassVIII } from './Components/ClassVIII';
import { ClassIX } from './Components/ClassIX';
import { ClassX } from './Components/ClassX';
import { CricketTeam } from './Components/CricketTeam';
import { FootballTeam } from './Components/FootballTeam';
import { Hookey } from './Components/Hookey';
import { Kabbadi } from './Components/Kabbadi';
import { Coaches } from './Components/Coaches';
import { Countries } from './CountriesAPI/Countries';


function App() {

  // const localStore = configStore();
  
  return (
    <div className="main">
      <h1 style={{textAlign:"left"}}>Welcome to Redux Tutorial</h1>
      {/* <Provider store={localStore}> */}
      <BrowserRouter>
      <Countries/>
      {/* <NavBar/> */}
      <Routes>
        <Route path='/8th' element={<ClassVIII/>}/>
        <Route path='/9th' element={<ClassIX/>}/>
        <Route path='/10th' element={<ClassX/>}/>
        <Route path='/CricketTeam' element={<CricketTeam/>}/>
        <Route path='/FootballTeam' element={<FootballTeam/>} />
        <Route path='/hookey' element={<Hookey/>} />
        <Route path='/kabbadi' element={<Kabbadi/>}/>
        <Route path='/coaches' element={<Coaches/>}/>
      </Routes>
      </BrowserRouter>
      {/* </Provider> */}
    </div>
  );
}

export default App;
