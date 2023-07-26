import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TestOne from './../Components/Assesments/TestOne';

describe('TestOne component', () => {
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
          <TestOne allAnswer={allAnswer} view={view} />
        );
        const question = queryAllByText(/QuestionType/i);
        expect(question.length).toBe(0);
      
        const options = getAllByRole('button');
        expect(options.length).toBe(5);
      });
      
  test('handles form submission', () => {
    const allAnswer = []; 
    const view = 1; 

    const { getByRole } = render(
      <TestOne allAnswer={allAnswer} view={view} />
    );
    const submitButton = getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);
  });
  const allAnswer = [
    {
      QuestionNumber: 1,
      LevelNumber: 142,
      correctAnswer: 'Option 2',
      options: ['Option 1', 'Option 2', 'Option 3'],
      status: ''
    },
    {
      QuestionNumber: 2,
      LevelNumber: 142,
      correctAnswer: 'Option 1',
      options: ['Option 1', 'Option 2', 'Option 3'],
      status: ''
    },
  ];
  const view = 1;

  test('renders without error', () => {
    render(<TestOne allAnswer={allAnswer} view={view} />);
  });

  test('handles submit correctly', () => {
    const { getByRole } = render(<TestOne allAnswer={allAnswer} view={view} />);
    const submitButton = getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);
  });
test('renders the component', () => {
  render(<TestOne allAnswer={allAnswer} view={view} />);
 
  expect(screen.getByText('Answer The Following Questions')).toBeInTheDocument();
});
});
