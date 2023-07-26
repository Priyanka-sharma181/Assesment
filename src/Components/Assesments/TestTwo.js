import React, { useState } from 'react';
import "../../Css/style.css";
import TestOne from "./TestOne";
import LayOut from "./LayOut";
import TestThree from "./TestThree";
const TestTwo = ({ allAnswer, view }) => {
  const [question, setQuestion] = useState(allAnswer);
  const [testtwoView, setTestTwoView] = useState(view);

  const containerTwoStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '0.1rem',
  };
  const handleTwoAnswerClick = (e, a1, option) => {
    let newTwoQuestion = question;

    newTwoQuestion.map((obj, index) => {
      if (obj.QuestionNumber === option.QuestionNumber) {
        if (a1 === obj.correctAnswer) {
          obj.status = 1;
        }
        else {
          obj.status = 0;
        }

      }
    });
    setQuestion(newTwoQuestion);
    const buttons = document.querySelectorAll('.buttonStyle');
    buttons.forEach((button) => {
      button.classList.remove('selected');
      button.style.outline = 'none';
    });
    e.currentTarget.classList.add('selected');
    e.currentTarget.style.outline = '2px solid green';
  };
  const handleTwoSubmit = () => {
    let isAllSelected = true;
    question.forEach((option) => {
      if (option.LevelNumber === 178 && option.status === '') {
        isAllSelected = false;
      }
    });
    if (isAllSelected) {
      let newTwoQuestion = question;
      const count = newTwoQuestion.reduce((count, question) => {
        if (question.LevelNumber === 178 && question.status === 1) {
          return count + 1;
        }
        return count;
      }, 0);

      if (count > 3) {
        setTestTwoView(3)
      }
      else {
        setTestTwoView(1)
      }

      setQuestion(newTwoQuestion);
    } else {
      alert("Please select an option for all questions.");
    }
  };
  if (testtwoView === 2) {
    return (
      <>
       <LayOut />
          <div className="main pb-0 ">
            <div className="span">
              <span className="s1">Topic : What comes after</span>
            </div>
            {question.map((option, index) =>
              option.LevelNumber === 178 ? (
                <div className="qus" key={option.correctAnswer}>
                  <span className="Qus-num">Q{option.QuestionNumber} . {option.question}</span>
                  <div style={containerTwoStyle}>
                    {option.options.map((a1, optionIndex) => (
                      <button
                      className="buttonStyle"
                        onClick={(e) => handleTwoAnswerClick(e, a1, option)}
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
              <button className="Assessment-btn mb-5" onClick={handleTwoSubmit}>
                Submit
              </button>
            </div>
          </div>
      </>
    );
  } else if (testtwoView === 3) {
    return <TestThree allAnswer={question} view={3} />;
  } else if (testtwoView === 1) {
    return <TestOne allAnswer={question} view={1} />;
  } else {
    return null;
  }
};

export default TestTwo;