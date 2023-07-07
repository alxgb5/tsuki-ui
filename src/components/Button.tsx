import React from 'react';
import '../styles/button.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color?: 'default' | 'primary';
}

const Button = (props: ButtonProps) => {
  return <button className={props.color}>{props.text}</button>;
};

export default Button;