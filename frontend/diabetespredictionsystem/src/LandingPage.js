import React from 'react';
import { Link } from 'react-router-dom';
const LandingPage = () => {
  return (<>
    <div className="landing-page">
      <h1>WELCOME TO DIABETES PREDICTION SYSTEM</h1>
      <Link to="/predict">
        <button className="predict-button">PREDICT DIABETES RISK</button>
      </Link>
      
    </div>
    </>
  );
};

export default LandingPage;