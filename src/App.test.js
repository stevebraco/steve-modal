import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
test('button has correct initial color', () => {
  render(<App />);
  const btnOpenModal = screen.getByRole('button', { name: 'click' });
  fireEvent.click(btnOpenModal);
  const modal = screen.getByTestId('modal');
  expect(modal).toBeTruthy();
});
