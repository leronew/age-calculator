import React from 'react';
import './css/spacing.css';
import '../../src/index.css';
import Age from './age.js';
import Dates from './date.js';
import Name from './names.js';

const GenerateCards = (props) =>{
  const cards = [];
    for(let i = 1; i <= props.number; i++) {

      let studentLabel = `Student # ${i}`
      cards.push(
        <div
          className={i % 2 === 0 ?  'card-spacing orangeBackground' : 'card-spacing blueBackground'}
          key={i}
          index={i}>
          <span className='student-label'>{studentLabel}</span>
          <Name title='Name' setName={props.setName.bind(this, i + 2)}/>
          <Dates date='DOB' />
          <Age title='Age in Term 1' />
          <Age title='Age in Term 2' />
          <Age title='Age in Term 3' />
        </div>
      )
  }
  return cards
}

export default GenerateCards;
