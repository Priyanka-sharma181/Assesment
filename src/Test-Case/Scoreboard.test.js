import React from 'react';
import { render,screen } from '@testing-library/react';
import Scoreboard from './../Components/Scoreboard/index';
describe('Scoreboard component', () => {
    test('renders level scores correctly', () => {
      const allAnswer = [
        {
        "Level 1": 1,
        "Level 2": 2,
        "Level 3": 3,
        "Level 4": 4
      }
      ];
      render(<Scoreboard allAnswer={allAnswer} />);
  
      const level1Score = screen.queryAllByText(/Level1/i);
      expect(level1Score).toHaveLength(0);
  
      const level2Score = screen.queryAllByText(/Level2/i);
      expect(level2Score).toHaveLength(0);
  
      const level3Score = screen.queryAllByText(/Level3/i);
      expect(level3Score).toHaveLength(0);
  
      const level4Score = screen.queryAllByText(/Level4/i);
      expect(level4Score).toHaveLength(0);
    });
    
   
    });

    