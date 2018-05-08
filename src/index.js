import React from 'react';
import ReactDOM from 'react-dom';
import Dates from './components/date.js';
import Name from './components/names.js';
import TotalNum from './components/number.js';
import GenerateCards from './components/generateCards.js';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class Index extends React.Component{
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

  calcAges = () =>{
    console.log('Ages calculated on blur');
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
              <TotalNum setNumberOfStudents={this.setNumberOfStudents.bind(this)} numInForm='No. of Students'/>
            </div>
            <div className='captureInfo'>
              <Dates setDate={this.setDate.bind(this, 1)} date='End of Term 1' />
              <Dates setDate={this.setDate.bind(this, 2)}  date='End of Term 2' />
              <Dates setDate={this.setDate.bind(this, 3)}  date='End of Term 3' />
            </div>
          </div>
          <div className='studentsCards'>
            <GenerateCards
              setStudentName={this.setInfo}
              setDOB ={this.setDate}
              number={this.state.numInForm}
              onBlur={this.calcAges}/>
          </div>
        </div>
      )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
