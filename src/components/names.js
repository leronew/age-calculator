import React from 'react';
import './css/spacing.css';

const Name = (props) => {

  return (
    <div className='spacing'>
      <span className='nameInput'>{props.title}</span>
      <input onChange={props.setFormInfo} type='text' />
    </div>
  )
}

export default Name;
