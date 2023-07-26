import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TestThree from './../Components/Assesments/TestThree';

describe('TestThree component', () => {
  window.alert = () => {}; 
    test('renders question and options', () => {
        const allAnswer = [
            {
                "QuestionNumber": 1,
                "LevelNumber": 142,
                "LevelTopic": "Count and write",
                "Instruction": "What come after",
                "question": "https://thumbs.dreamstime.com/z/printable-worksheet-kindergarten-preschool-count-write-numbers-to-harvest-ripe-berries-fruits-122801253.jpg",
                "QuestionType": "Image",
                "AnswerType": "MCQ",
                "options": ["1", "5", "7", "9"],
                "correctAnswer": "9",
                "status":"" 
              }
        ]; 
        const view = 1;
      
        const { queryAllByText, getAllByRole } = render(
          <TestThree allAnswer={allAnswer} view={view} />
        );
      
        
        const question = queryAllByText(/QuestionType/i);
        expect(question.length).toBe(0);
      
        const options = getAllByRole('button');
        expect(options.length).toBe(21);
      });
      

  test('handles form submission', () => {
    const allAnswer = []; 
    const view = 1; 

    const { getByRole } = render(
      <TestThree allAnswer={allAnswer} view={view} />
    );

    const submitButton = getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

  });

});
