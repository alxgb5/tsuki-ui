import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = (props: ButtonProps) => {
  return <button>{props.text}</button>;
};

export default Button;