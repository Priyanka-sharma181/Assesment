import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TestFour from './../Components/Assesments/TestFour';

describe('TestFour component', () => {
  window.alert = () => {}; 
    test('handleSubmit updates view and question status', () => {
      const allAnswer = [
      
      ];
      const view = 4;
      const { getByRole } = render(<TestFour allAnswer={allAnswer} view={view} />);
  
      allAnswer.forEach((question) => {
        const inputField = getByRole('textbox', { name: /Q1/i });

        fireEvent.change(inputField, { target: { value: 'Option 1' } });
      });
  
      const submitButton = getByRole('button', { name: /Submit/i });
      fireEvent.click(submitButton);
      expect(view).toBe(4);
  
      allAnswer.forEach((question) => {
        if (question.LevelNumber === 235) {
          expect(question.status).toBe(1);
        }
      });
    });
  });