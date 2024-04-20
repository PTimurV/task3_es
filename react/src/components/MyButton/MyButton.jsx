import React from 'react';
import './MyButton.css';

const Button = ({ onClick, children }) => {
  return (
    <button className='MyButton' onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;