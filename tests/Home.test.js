import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';
import Home from '../src/Pages/Home.js';

test('test the homepage loads with Title and Welcome', () => {
  render(<Home />);
  expect(Home).toInclude("Catch Me")
});
