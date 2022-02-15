import React from 'react';
import './Button.css';

interface ButtonProps {
  buttonType: string;
  buttonText?: string;
  buttonClassName?: string;
}

// buttonType are "login-primary", "login-secondary", "login-tertiary"  for colors
// buttonIncludes are "onlytext", "onlyicon", "textandicon"
// buttonText and buttonClassName are optional

const Button: React.FC<ButtonProps> = ({
  children,
  buttonType,
  buttonText,
  buttonClassName,
}) => {
  let buttonStyle: string = 'login-primary';
  if (buttonType === 'login-primary') {
    buttonStyle = 'button--login-primary';
  } else if (buttonType === 'login-secondary') {
    // debugger;
    buttonStyle = 'button--login-secondary';
  } else if (buttonType === 'login-tertiary') {
    buttonStyle = 'button--login-tertiary';
  }

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
