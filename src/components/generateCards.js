import React from 'react'
import './css/spacing.css';
import '../../src/index.css';
import Age from './age.js';
import Dates from './date.js';
import Name from './names.js';

const GenerateCards = (props) =>{
  const cards = [];
    for(let i = 1; i <= props.number; i++) {
      let index=i + 2;
      let studentLabel = `Student # ${i}`
      cards.push(
        <div
          key={i}
          className={i % 2 === 0 ?  'card-spacing orangeBackground' : 'card-spacing blueBackground'}>
          <span className='student-label'>{studentLabel}</span>
          <Name title='Name' setInfo={props.setStudentName.bind(this, index)}/>
          <Dates onBlur={props.onBlur} setDate={props.setDOB.bind(this, index+1)} date='DOB' />
          <Age title='Age in Term 1' />
          <Age title='Age in Term 2' />
          <Age title='Age in Term 3' />
        </div>
      )
  }
  return cards;
}

export default GenerateCards;
