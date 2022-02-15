import React from 'react';
import './Button.css';

interface ButtonProps {
  buttonType: string;
  buttonText?: string;
  buttonClassName?: string;
}

// buttonType are "login-primary", "login-secondary", "login-tertiary"  for colors
// buttonIncludes are "onlytext", "onlyicon", "textandicon"
// buttonText is optional

const Button: React.FC<ButtonProps> = ({
  children,
  buttonType,
  buttonText,
  buttonClassName,
}) => {
  // const Button: React.FC<ButtonProps> = ({
  //   children,
  //   buttonType,

  // }) => {
  // const Button: React.FC<{ buttonType: string }> = ({ children, buttonType }) => {

  let buttonStyle: string = 'login-primary';
  if (buttonType === 'login-primary') {
    buttonStyle = 'button--login-primary';
  } else if (buttonType === 'login-secondary') {
    // debugger;
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
  let className = '';

  if (buttonClassName) {
    className = `button ${buttonStyle} ${buttonClassName}`;
  } else {
    className = `button ${buttonStyle}`;
  }
  //

  return (
    <button
      className={className}
      onClick={() => {
        console.log('clickeeeeed, buttonType = ', buttonType);
      }}
    >
      {buttonText}
    </button>
  );
};

export default Button;
