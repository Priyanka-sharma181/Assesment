import React, { useState } from "react";
import "../../Css/style.css";
import TestTwo from "./TestTwo";
import Scoreboard from "../Scoreboard/index";
import LayOut from "./LayOut";
const TestOne = ({ allAnswer, view }) => {
  const [question, setQuestion] = useState(allAnswer);
  const [viewZero, setViewZreo] = useState(view);

  const containerOneStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0.1rem",
  };

  const handleOneAnswerClick = (e, a1, option) => {
    let newOneQuestion = question;
    newOneQuestion.map((obj, index) => {
      if (obj.QuestionNumber === option.QuestionNumber) {
        if (a1 === obj.correctAnswer) {
          obj.status = 1;
        }
        else {
          obj.status = 0;
        }
      }
    });
    setQuestion(newOneQuestion);
    const buttons = document.querySelectorAll('.buttonStyle');
    buttons.forEach((button) => {
      button.classList.remove('selected');
      button.style.outline = 'none';
    });

    e.currentTarget.classList.add('selected');
    e.currentTarget.style.outline = '2px solid green';
  };
  const handleOneSubmit = () => {
    let isAllSelected = true;
    question.forEach((option) => {
      if (option.LevelNumber === 142 && option.status === '') {
        isAllSelected = false;
      }
    });
    if (isAllSelected) {
      let newOneQuestion = question;
      const count = newOneQuestion.reduce((count, question) => {
        if (question.LevelNumber === 142 && question.status === 1) {
          return count + 1;
        }
        return count;
      }, 0);

      if (count > 3) {
        setViewZreo(2)
      }
      else {
        setViewZreo(0)
      }

      setQuestion(newOneQuestion);
    } else {
      alert("Please select an option for all questions.");
    }
  };



  if (viewZero === 1) {
    return (
      <>
       <LayOut />
       
          <div className="main pb-0 ">
            <div className="span">
              <span className="s1">Topic : Count and write</span>
            </div>
            {question.map((option, index) =>
              option.LevelNumber === 142 ? (
                <div className="qus" key={option.correctAnswer}>
                  <span className="Qus-num">Q{option.QuestionNumber}</span>
                  <div className="text-center">
                    <img
                      className="test2-img mt-2"
                      width="300"
                      height="200"
                      src={process.env.PUBLIC_URL + option.question}
                     
                    />
                  </div>
                  <div style={containerOneStyle}>
                    {option.options.map((a1, optionIndex) => (
                      <button
                      className="buttonStyle"
                        onClick={(e) => handleOneAnswerClick(e, a1, option)}
                        key={a1}
                      >
                        {a1}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null
            )}
            <div className="sub-btn">
              <button className="Assessment-btn mb-5" onClick={handleOneSubmit}>
                Submit
              </button>
            </div>
          </div>
       
      </>
    );
  } else if (viewZero === 2) {
    return <TestTwo allAnswer={allAnswer} view={2} />;
  } else if (viewZero === 0) {
    return <Scoreboard allAnswer={allAnswer} />;
  } else {
    return null;
  }
};

export default TestOne;