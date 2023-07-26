import { Input } from "@mui/material";
import React, { useState } from 'react';
import "../../Css/style.css";
import Scoreboard from "../Scoreboard/index";
import TestThree from "./TestThree";
import LayOut from "./LayOut";
import Questions from '../Questions.json';

const containerFourStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '0.1rem',
};
const TestNine = ({ allAnswer, view }) => {
  const [Question, setQuestion] = useState(allAnswer);
  const [testFourView, setTestFourViewView] = useState(view);

  const handleFourAnswerChange = (e, option) => {
    let newFourQuestion = [...Questions];
    newFourQuestion.forEach((obj) => {
      if (obj.QuestionNumber === option.QuestionNumber) {
        if (e.target.value === obj.CorrectAnswer) {
          obj.status = 1;
        }
        else {
          obj.status = 0;
        }
      }
    });
    setQuestion(newFourQuestion);
    const buttons = document.querySelectorAll('.buttonStyle');
    buttons.forEach((button) => {
      button.classList.remove('selected');
      button.style.outline = 'none';
    });
    e.currentTarget.classList.add('selected');
    e.currentTarget.style.outline = '2px solid green';
  };

  const handleFourSubmit = () => {
    let isAllSelected = true;
    Question.forEach((option) => {
      if (option.LevelNumber === "9" && option.status === '') {
        isAllSelected = false;
      }
    });
    if (isAllSelected) {
      let newFourQuestion = Question;
      const count = newFourQuestion.reduce((count, Question) => {
        if (Question.LevelNumber === "9" && Question.status === 1) {
          return count + 1;
        }
        return count;
      }, 0);

      if (count > 3) {
        setTestFourViewView(5)
      }
      else {
        setTestFourViewView(3)
      }
      setQuestion(newFourQuestion);
    } else {
      alert("Please select an option for all Questions.");
    }
  };

//   if (testFourView === 4) {
    return (
      <>
          <LayOut />
          <div className="main pb-0 ">
            <div className="span">
              <span className="s1">Topic : Multiplication Facts (6-10) (H)</span>
            </div>
            {Questions.map((option, index) =>

              option.LevelNumber === "9" ? (
                <div className="qus" key={option.CorrectAnswer}>
                  <span className="Qus-num">Q{option.QuestionNumber} . {option.Question}</span>
                  <div style={containerFourStyle}>
                    <Input
                      variant="outlined"
                      onChange={(e) => handleFourAnswerChange(e, option)}
                      style={{ margin: "0.5rem" }}
                    />
                  </div>
                </div>
              ) : null
            )}
            <div className="sub-btn">
              <button className="Assessment-btn mb-5" onClick={handleFourSubmit}>
                Submit
              </button>
            </div>
          </div>
      </>
    );
//   } else if (testFourView === 5) {
//     return <Scoreboard allAnswer={Question} />;
//   } else if (testFourView === 3) {
//     return <TestThree allAnswer={Question} testtwoView={3} />;
//   } else {
//     return null;
//   }
};

export default TestNine;