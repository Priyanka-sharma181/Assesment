import React from 'react';
import '../../Css/style.css';
import logo from '../../assets/Saarthi-blue.png';
const Scoreboard = ({ allAnswer }) => {


  const level1 = allAnswer.reduce((count, question) => {
    if (question.LevelNumber === 142 && question.status === 1) {

      return count + 1;
    }
    return count;
  }, 0);

  const level2 = allAnswer.reduce((count, question) => {
    if (question.LevelNumber === 178 && question.status === 1) {

      return count + 1;
    }
    return count;
  }, 0);
  const level3 = allAnswer.reduce((count, question) => {
    if (question.LevelNumber === 220 && question.status === 1) {

      return count + 1;
    }
    return count;
  }, 0);
  const level4 = allAnswer.reduce((count, question) => {
    if (question.LevelNumber === 235 && question.status === 1) {

      return count + 1;
    }
    return count;
  }, 0);

  const handleSubmit = () => {
    window.location.reload();
    window.location = "/"
  }
  return (
    <>
      <div className="form-group1">
        <img className="img" src={logo} alt="Company Logo" />
      </div>
      <div className="container">


        <div className="main">
          <div className="span"><span className="s1">Scoreboard</span></div>
          <div className="form-group3">
            <div className="qus-1">
              <div className="text-center">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Level</th>
                      <th scope="col">Correct Answers</th>
                      <th scope="col">Total Questions</th>

                    </tr>
                  </thead>
                  <tbody>
                    {level1 != '' ?
                      <tr>
                        <th scope="row">Level 1</th>
                        <td>{level1}</td>
                        <td>5</td>
                      </tr>
                      : ""}
                    {level2 != '' ?
                      <tr>
                        <th scope="row">Level 2</th>
                        <td>{level2}</td>
                        <td>5</td>
                      </tr>
                      : ""}
                    {level3 != '' ? <tr>
                      <th scope="row">Level 3</th>
                      <td>{level3}</td>
                      <td>5</td>
                    </tr> : ""}
                    {level4 != '' ?
                      <tr>
                        <th scope="row">Level 4</th>
                        <td>{level4}</td>
                        <td>5</td>
                      </tr>
                      : ""}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="text-center">
              <button className="button-sub"
                onClick={handleSubmit}>Go Back</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Scoreboard;