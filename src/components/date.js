import React from 'react';
import './css/spacing.css';

const Dates = (props) => {
  return (
    <div className='spacing'>
      <span>{props.date}</span>
      <input onChange={props.getDate} type='date' />
    </div>
  )
}

export default Dates;
