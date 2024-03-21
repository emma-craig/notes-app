import React from 'react';
import { render, screen } from '@testing-library/react';
import FetchApp from './FetchApp';

test('renders learn react link', () => {
  render(<FetchApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
