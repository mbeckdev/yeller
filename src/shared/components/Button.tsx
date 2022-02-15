import React from 'react';
import './Button.css';

interface ButtonProps {
  buttonType: string;
}

//strings are "primary", "secondary", "tertiary"  for colors
// buttonIncludes are "onlytext", "onlyicon", "textandicon"

const Button: React.FC<ButtonProps> = ({ children, buttonType }) => {
  // const Button: React.FC<{ buttonType: string }> = ({ children, buttonType }) => {

  let buttonStyle: string = 'login-primary';
  if (buttonType === 'login-primary') {
    buttonStyle = 'button--login-primary';
  } else if (buttonType === 'login-secondary') {
    buttonStyle = 'button--login-secondary';
  } else if (buttonType === 'login-tertiary') {
    buttonStyle = 'button--login-tertiary';
  }
  // if (buttonType === 'primary') {
  //   buttonStyle = 'button--primary';
  // } else if (buttonType === 'secondary') {
  //   buttonStyle = 'button--secondary';
  // } else if (buttonType === 'tertiary') {
  //   buttonStyle = 'button--tertiary';
  // }

  return (
    <button
      className={`button ${buttonStyle}`}
      onClick={() => {
        console.log('clickeeeeed, buttonType = ', buttonType);
      }}
    >
      Button text here
    </button>
  );
};

export default Button;
