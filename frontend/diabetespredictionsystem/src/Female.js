import React from 'react'
import { useState } from 'react';
import './styles/Female.css';
import PredictionResult from './components/PredictionResult';
function Female() {
  
  const [prediction, setPrediction] = useState('');
  const [probability,setProb] = useState('');
  const handlePredict = async () => {
    try {
      const response = await fetch('http://localhost:5000/predict/female', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "feature1": preg, "feature2": glucose, "feature3":bp,"feature4":skin,
          "feature5":insulin,"feature6":bmi,"feature7":dpf,"feature8":age
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setPrediction(data.prediction);
      setProb(data.probability);
      var result = "Check For Results at the bottom section";
      if (data.error === undefined){
        alert(result);
      }
      else{
        alert(data.error);
      }
      
      
    } catch (error) {
      console.error('Error:', error);
    }

  };
  

  const [preg, setPreg] = useState('');
  const [glucose, setGlucose] = useState('');
  const [bp, setBP] = useState('');
  const [skin, setSkin] = useState('');
  const [insulin, setInsulin] = useState('');
  const [bmi, setBMI] = useState('');
  const [age, setAge] = useState('');
  const [dpf, setDPF] = useState('');
  return (
    <div style={{ marginTop: '-1em',marginLeft:'3em' }}>
      <div className="prediction-page">
        <h2>DIABETES PREDICTION</h2>
        <label htmlFor="feature1">Pregnancies:</label>
        <input
          type="text"
          id="feature1"
          value={preg}
          onChange={(e) => setPreg(e.target.value)}
        />
        <br />
        <label htmlFor="feature2">Glucose Level:<em style ={{"fontSize":"15px","margin-left":"8em"}}>&#40;70mg/dL - 100mg/dL&#41;</em></label>
        <input
          type="text"
          id="feature2"
          value={glucose}
          onChange={(e) => setGlucose(e.target.value)}
        />
        <br />
        <label htmlFor="feature3">Blood Pressure:<em style ={{"fontSize":"15px","margin-left":"8em"}}>&#40;60mmHg-80mmHg&#41;</em></label>
        <input
          type="text"
          id="feature3"
          value={bp}
          onChange={(e) => setBP(e.target.value)}
        />
        <br />
        <label htmlFor="feature4">Skin Thickness:</label>
        <input
          type="text"
          id="feature4"
          value={skin}
          onChange={(e) => setSkin(e.target.value)}
        />
        <br />
        <label htmlFor="feature5">Insulin:</label>
        <input
          type="text"
          id="feature5"
          value={insulin}
          onChange={(e) => setInsulin(e.target.value)}
        />
        <br />
        <label htmlFor="feature6">BMI:<em style ={{"fontSize":"15px","margin-left":"12em"}}>&#40;18.5 kg/m<sup>2</sup>-24.9 kg/m<sup>2</sup>&#41;</em></label>
        <input
          type="text"
          id="feature6"
          value={bmi}
          onChange={(e) => setBMI(e.target.value)}
        />
        <br />
        <label htmlFor="feature7">Age:</label>
        <input
          type="text"
          id="feature7"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <label htmlFor="feature8">Diabetes Pedigree Function:</label>
        <input
          type="text"
          id="feature8"
          value={dpf}
          onChange={(e) => setDPF(e.target.value)}
        />
        <br />
        <button onClick={handlePredict} className="predict-button">
          Predict
        </button>
      </div>
      {prediction !== null && <PredictionResult prediction={prediction} probability={probability}/>}
    </div>
  )
}

export default Female
