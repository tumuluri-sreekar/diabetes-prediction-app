import React from 'react'
import '../styles/overview.css'
function Overview() {
  return (
    <div style={{"textAlign":"left","background-color":"#ffffff"}}>
      <h2 style={{"font-size":"3vw","color": "rgb(0, 66, 136)" ,"padding":"10px"}}>Overview</h2>
      <p style={{"font-size":"1.9vw","color": "rgb(0, 0, 0)" }}>Diabetes is a chronic disease caused by high blood glucose levels. Either the pancreas produces insufficient amounts of insulin or the body’s cells stop responding to hormones. There is an increasing need for creative solutions in early prediction and healthcare management due to the rising global revalence
of diabetes. The model used in this system evaluates susceptibility to potential diabetes hazards in the future. With a focus on early identification and the reduction of the burden associated with complications related to diabetes, this model highlights the revolutionary potential of machine learning in healthcare. An ensembling approach for diabetes rediction is implemented. The best model is selected from a collection of diverse machine learning algorithms that includes Random Forest (RF), K-Nearest Neighbors (KNN), XGboost, and Catboost. Using metrics like accuracy,  specificity, sensitivity, precision, false omission rate, and Area Under Curve (AUC), the performance of the developed model is assessed. The suggested model has a 97 percent accuracy rate after being trained on the
PIMA Indian Diabetes dataset. This system adds to the continuing conversation about how artificial intelligence can be used in the healthcare industry to promote proactive health management and better patient outcomes.</p>
    </div>
  )
}

export default Overview
