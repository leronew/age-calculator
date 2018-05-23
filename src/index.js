import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Dates from './components/date.js';
import Age from './components/age.js';
import Name from './components/names.js';
import TotalNum from './components/number.js';
import GenerateCards from './components/generateCards.js';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// use map function instead of for loop. create a constant that holds all elements
//  for generate card.then use that const on render function. use numInForm to
//  determine number of cards to generate in map functon. pass the index from the
//  map function as a props.



class Index extends Component{
  constructor(props){
    super(props);
    this.state = {
          form:'',
          numInForm: null,
          endOfT1:'',
          endOfT2:'',
          endOfT3:'',
          teacher:'',
          student:[]
    };
  }

  calcAges = (endOfTermOne, endOfTermTwo, endOfTermThree, e) => {
    const birthdate = new Date(e.target.value);
    const ageInMilliseconds1 =
      (Date.UTC(endOfTermOne.getFullYear(), endOfTermOne.getMonth(), endOfTermOne.getDate())) -
      (Date.UTC(birthdate.getFullYear(), birthdate.getMonth(), birthdate.getDate()));
    const ageInMilliseconds2 =
     (Date.UTC(endOfTermTwo.getFullYear(), endOfTermTwo.getMonth(), endOfTermTwo.getDate())) -
     (Date.UTC(birthdate.getFullYear(), birthdate.getMonth(), birthdate.getDate()));
    const ageInMilliseconds3 =
      (Date.UTC(endOfTermThree.getFullYear(), endOfTermThree.getMonth(), endOfTermThree.getDate())) -
      (Date.UTC(birthdate.getFullYear(), birthdate.getMonth(), birthdate.getDate()));

    let ageYears1 = Math.trunc(ageInMilliseconds1 / 31556952000);
    let ageYears2 = Math.trunc(ageInMilliseconds2 / 31556952000);
    let ageYears3 = Math.trunc(ageInMilliseconds3 / 31556952000);

    let months1 = Math.floor(ageInMilliseconds1 % 31556952000 / 31556952000 * 12);
    months1 === 12 ? (ageYears1+=1, months1=0):ageYears1=ageYears1;

    let months2 = Math.floor(ageInMilliseconds2 % 31556952000 / 31556952000 * 12);
    months2 === 12 ? (ageYears2+=1, months2=0):ageYears2=ageYears2;

    let months3 = Math.floor(ageInMilliseconds3 % 31556952000 / 31556952000 * 12);
    months3 === 12 ? (ageYears1+=3, months3=0):ageYears3=ageYears3;
  }

  handleBlur = (e) =>{
    const endOfTermOne = new Date(this.state.endOfT1);
    const endOfTermTwo = new Date(this.state.endOfT2);
    const endOfTermThree = new Date(this.state.endOfT3);
    this.calcAges(endOfTermOne, endOfTermTwo, endOfTermThree, e);
  }

  setInfo = (number, e) =>{
    switch (number) {
      case 1:
        this.setState({
          form:e.target.value
        });
        break;

        case 2:
          this.setState({
            teacher:e.target.value
          });
        break;

      default:
        const index = number - 3;
        const tempStudentState = Object.assign([], this.state.student);
        const tempIndividualStudent = Object.assign({}, tempStudentState[index]);
        tempIndividualStudent.name = e.target.value;
        tempStudentState.splice(index, 1, tempIndividualStudent);
        this.setState({
          student:tempStudentState
        });
    }
  }

  setDate = (number, e) => {
    switch (number) {
      case 1:
        this.setState({
            endOfT1:e.target.value
        })
        break;

      case 2:
        this.setState({
          endOfT2:e.target.value
        })
        break;

      case 3:
        this.setState({
          endOfT3:e.target.value
        })
        break;

      default:
        const index = number - 4;
        const tempStudentState = Object.assign([], this.state.student);
        const tempIndividualStudent = Object.assign({}, tempStudentState[index]);
        tempIndividualStudent.dob = e.target.value;
        tempStudentState.splice(index, 1, tempIndividualStudent);
        this.setState({
          student:tempStudentState
        });

    }
  }

  setNumberOfStudents = (e) => {
    const num = e.target.value;
    let tempStudent = [];

    for(let index = 0; index < num; index++) {
      tempStudent.push(
        {name: '', dob: '', T1Age: '', T2Age: '', T3Age: ''}
      )
    };
    this.setState({
      numInForm: num,
      student: tempStudent
    });
  }

  render() {
      return(
        <div className='container'>
          <div className='main'>
            <div className='captureInfo'>
              <Name setInfo={this.setInfo.bind(this, 1)} title='Form Class' />
              <Name setInfo={this.setInfo.bind(this, 2)} title='Form Teacher' />
              <TotalNum setNumberOfStudents={this.setNumberOfStudents.bind(this)}
              numInForm='No. of Students'/>
            </div>
            <div className='captureInfo'>
              <Dates setDate={this.setDate.bind(this, 1)} date='End of Term 1' />
              <Dates setDate={this.setDate.bind(this, 2)}  date='End of Term 2' />
              <Dates setDate={this.setDate.bind(this, 3)}  date='End of Term 3' />
            </div>
            <div className='captureInfo'>
              <Age title='Average age as of '> {this.state.endOfT1} </Age>
              <Age title='Average age as of '> {this.state.endOfT2} </Age>
              <Age title='Average age as of '> {this.state.endOfT3} </Age>
            </div>
          </div>
          <div className='studentsCards'>

            {/* use map to generate cards. Pass index as a props */}
            <GenerateCards
              setStudentName={this.setInfo}
              setDOB ={this.setDate}
              number={this.state.numInForm}
              onBlur={this.handleBlur} />
          </div>
        </div>
      )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
