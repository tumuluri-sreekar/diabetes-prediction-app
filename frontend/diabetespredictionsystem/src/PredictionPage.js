import { Link } from 'react-router-dom';
import './styles/Prediction.css'
const PredictionPage = () => {

  return (
    <>
    
      <div style={{"margin-top":"8em"}}>
      <Link to="/male">
        <button className="predict-button"style={{"margin-right":"3em"}}>MALE</button>
      </Link>
      <Link to="/female">
        <button className="predict-button">FEMALE</button>
      </Link>
      
      </div>
      
    </>
  );
};

export default PredictionPage;