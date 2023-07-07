import React from 'react';
import Button from '../src/components/Button';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button text='Click me' />);
    expect(getByText('Click me')).toBeDefined();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button text='Click me' onClick={handleClick} />);
    userEvent.click(getByText('Click me')).then(() => {
      console.log('clicked');
      expect(handleClick).toHaveBeenCalled();
    }, (err) => {
      console.error(err);
    });
  });
});