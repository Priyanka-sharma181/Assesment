import React from 'react';
import '../../Css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/Saarthi-blue.png';
import QuizLogo from '../../assets/44619-quiz-1.mp4';
import { Link } from 'react-router-dom';
const Home = () => {

    return (
   <>
    <div className="form-group1">
    <img className="img" src={logo} alt="Company Logo" />
  </div>
    <div className="container">
   
      <div className="row">
          <h1 className="text-center mb-4" style={{color:"white"}}>Welcome The Saarthi Assesments Portal</h1>
              <div className="home-main text-center">
              <video className="quizlogo" src={QuizLogo}></video>
              <div className="form-group2">
                  <Link to="/test1"><button className="buttonHome"
                  >Assessments </button></Link>
                </div>
              </div>
              </div>
      </div>
     
    </>
  )
};
export default Home;