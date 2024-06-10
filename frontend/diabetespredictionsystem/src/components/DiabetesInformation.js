import { useState } from 'react';
import { useEffect } from 'react';
import '../styles/DiabetesInformation.css';
import Causes from './Information/Causes';
import Complications from './Information/Complications';
import Management from './Information/Management';
import Symptoms from './Information/Symptoms';
import Types from './Information/Types';
const DiabetesInformation = () => {
    useEffect(()=>{},[]);
    const [it,SetIt]= useState(0);
    return (
        <div className="diabetes-info-container" style={{'paddingBottom':'320px'}}>
            <h1>Diabetes Information</h1>
            {it===0 ? <Causes/> : it===1?<Types/>:it===2?<Symptoms/>:it===3?<Complications/>:it===4?<Management/>:null}
            <button onClick={()=>{SetIt((it+1)%5)}} style={{"width":"100px",'position':'absolute','left':'45%',
    'bottom':'10px'}}>NEXT</button>     
        </div>
    );
};

export default DiabetesInformation;
