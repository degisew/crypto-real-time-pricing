import { BrowserRouter as Router } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import NavBar from '../components/Appbar/NavBar';
import '@testing-library/jest-dom';

const rendered = (
  <Router>
    <NavBar />
  </Router>
);

describe('Testing Header Component', () => {
  render(rendered);
  it('render navbar', () => {
    const element = screen.getByTestId('appbar-icon-div');
    expect(element).toBeInTheDocument();
  });
});
