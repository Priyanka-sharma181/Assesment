import React, { useState } from 'react';
import "../../Css/style.css";
import Questions from '../Questions.json';
import TestFour from "./TestFour";
import TestTwo from "./TestTwo";
import LayOut from "./LayOut";
const containerThreeStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '0.1rem',
};

const TestThree = ()=> {
  const [question, setQuestion] = useState(Questions);
  const [view, setView] = useState(3);

  const handleThreeAnswerClick = (e, a1, option) => {
    let newThreeQuestion = question;
    newThreeQuestion.map((obj, index) => {
      if (obj.QuestionNumber === option.QuestionNumber) {
        if (a1 === obj.correctAnswer) {
          obj.status = 1;
        }
        else {
          obj.status = 0;
        }
      }
    });

    setQuestion(newThreeQuestion);

    const buttons = document.querySelectorAll('.buttonStyle');
    buttons.forEach((button) => {
      button.classList.remove('selected');
      button.style.outline = 'none';
    });
    e.currentTarget.classList.add('selected');
    e.currentTarget.style.outline = '2px solid green';
  };

  const handleThreeSubmit = () => {
    let isAllSelected = true;
    question.forEach((option) => {
      if (option.LevelNumber === 220 && option.status === '') {
        isAllSelected = false;
      }
    });
    if (isAllSelected) {
      let newThreeQuestion = question;
      const count = newThreeQuestion.reduce((count, question) => {
        if (question.LevelNumber === 220 && question.status === 1) {
          return count + 1;
        }
        return count;
      }, 0);

      if (count > 3) {
        setView(4)
      }
      else {
        setView(2);
      }
      setQuestion(newThreeQuestion);
    } else {
      alert("Please select an option for all questions.");
    }
  };

  if (view === 3) {
    return (
      <>
       <LayOut />
          <div className="main pb-0 ">
            <div className="span">
              <span className="s1">Topic : What come before</span>
            </div>
            {question.map((option, index) =>
              option.LevelNumber === 220 ? (
                <div className="qus" key={option.correctAnswer}>
                  <span className="Qus-num">Q{option.QuestionNumber} . {option.question}</span>
                  <div style={containerThreeStyle}>
                    {option.options.map((a1, optionIndex) => (
                      <button
                      className="buttonStyle"
                        onClick={(e) => handleThreeAnswerClick(e, a1, option)}
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
              <button className="Assessment-btn mb-5" onClick={handleThreeSubmit}>
                Submit
              </button>
            </div>
          </div>
      </>
    );
  } else if (view === 4) {
    return <TestFour allAnswer={question} view={4} />;
  } else if (view === 2) {
    return <TestTwo allAnswer={question} view={2} />;
  } else {
    return null;
  }
};

export default TestThree;