import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import PredictionPage from './PredictionPage';
import './App.css'; 
import Navbar from './components/Navbar';
import Overview from './components/Overview';
import Male from './Male';
import Female from './Female';
import DiabetesInformation from './components/DiabetesInformation';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <div className="app" style={{"background-repeat": "repeat"}}>
        <Routes>
          <Route path="/" exact element={<LandingPage/>} />
          <Route path="/predict" element={<PredictionPage/>} />
          <Route path="/overview" element={<Overview/>} />
          <Route path="/male" element={<Male/>}/>
          <Route path="/female" element={<Female/>}/>
          <Route path="/info" element={<DiabetesInformation/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </>
    
  );
};

export default App;