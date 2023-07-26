import React from 'react';
import "../../Css/style.css";
import logo from "../../assets/Saarthi-blue.png";

const LayOut = ()=> {
  return (
    <>
      <div className="form-group1">
        <img className="img" src={logo} alt="Company Logo" />
      </div>

      <div className="container">
        <div>
          <span className="heading">Answer The Following Questions</span>
        </div>
       
      </div>
    </>
  );
};

export default LayOut;
