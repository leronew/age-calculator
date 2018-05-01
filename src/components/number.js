import React from 'react';
import './css/spacing.css';

const TotalNum = (props) => {

  const numbers = []
  for (let i = 1; i <= 35; i++) {
    numbers.push(i)
  }
  const options = numbers.map(number =>
    <option value={number.toString()} key={number}>{number}</option>
  )

  return (
    <div className='spacing'>
      <span className='nameInput'>{props.numInForm}</span>
      <select
        defaultValue='10'
        className='number-list'
        name = 'selectedNumber'
        onChange={props.setNumberOfStudents}  >
        {options}
      </select>
    </div>
  )
}

export default TotalNum;
