import React from 'react';

const Button = (props) => {
  
  return (
    <div>
      <button onClick={props.onClick}>Click</button>
    </div>
  )
}

export default Button;
