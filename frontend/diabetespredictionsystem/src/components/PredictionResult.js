import React from 'react';
import CareTips from './CareTips';
import Tips from './Tips'
import Risk from './Risk';
import Healthy from './Healthy';
const PredictionResult = ({ prediction,probability }) => {
    const predictionBoxStyle = {
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        margin: '20px 0',
        backgroundColor: '#f5f5f5',
        marginLeft:'-3em'
      };
      var p=probability;
  return (
    <div style={predictionBoxStyle}>
      <h2>PREDICTION RESULT</h2>
      {prediction === "The patient is at the risk of having diabetes"?<Risk/>:prediction==="The patient is healthy"?<Healthy/>:<></>}
      <p style={{"color":"red","fontSize":"18px"}}>{probability!=="0"?"Probability: "+p+"%":<></>}</p>
      <h3 style={{'textAlign':'left','fontSize':'25px'}}>TIPS</h3>
      {prediction === "The patient is at the risk of having diabetes" && <CareTips/>}
      {prediction === "The patient is healthy"  &&<Tips/>}
    </div>
  );
};



export default PredictionResult;