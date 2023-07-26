import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './../Components/Home/index';

describe('Home component', () => {
  test('renders welcome message', () => {
    const { getByText } = render(
      <Router>
        <Home />
      </Router>
    );

    const welcomeMessage = getByText(/Welcome The Saarthi Assesments Portal/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  test('renders assessment button', () => {
    const { queryAllByText  } = render(
      <Router>
        <Home />
      </Router>
    );

    const assessmentButtons = queryAllByText(/Assesments/i);
    expect(assessmentButtons.length).toBeGreaterThan(0);
  });

  test('renders company logo', () => {
    const { getByAltText } = render(
      <Router>
        <Home />
      </Router>
    );

    const companyLogo = getByAltText(/Company Logo/i);
    expect(companyLogo).toBeInTheDocument();
  });

});
