import React from 'react';
import './css/button.css';

const Age = (props) => {
  return (
    <div>
      <span>{props.title}{props.children}</span>
      <label>{}</label>
    </div>
  )
}

export default Age;
