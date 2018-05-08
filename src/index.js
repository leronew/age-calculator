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
          studentNames:[],
          studentDOB: []
    };
  }

  setFormInfo = (number, e) =>{
    switch (number) {
      case 1:
        this.setState({
          form:e.target.value
        });
        e.preventDefault();
        break;

        case 2:
          this.setState({
            teacher:e.target.value
          });
          e.preventDefault();
        break;
      default:
      let tempCopy = Object.assign({}, this.state.studentNames);
      tempCopy[number-3] = e.target.value;
      this.setState({
        studentNames: tempCopy
      });
      e.preventDefault();
    }
  }

  setName = (number, e) => {

  }

  setDate = (number, e) => {
    switch (number) {
      case 1:
        this.setState({
            endOfT1:e.target.value
        })
        e.preventDefault();
        break;

      case 2:
        this.setState({
          endOfT2:e.target.value
        })
        e.preventDefault();
        break;
      case 3:
        this.setState({
          endOfT3:e.target.value
        })
        e.preventDefault();
        break;
      default:
      let tempCopy = Object.assign({}, this.state.studentDOB);
      tempCopy[number-4] = e.target.value;
      this.setState({
        studentDOB: tempCopy
      });
      e.preventDefault();
    }
  }

  updateStudentState = (num) => {
    let tempStudentNames = Object.assign({}, this.state.studentNames);
    let tempStudentDOB = Object.assign({}, this.state.studentDOB);

    for(let index = 0; index < num; index++) {
      tempStudentNames[index] = '';
      tempStudentDOB[index]= ''
    };
    this.setState({
      studentNames: tempStudentNames,
      studentDOB: tempStudentDOB
    });
  }

  setNumberOfStudents = (e) => {
    this.setState({
      numInForm:e.target.value
    })
    this.updateStudentState(e.target.value);
    e.preventDefault();
  }

  render() {
      return(
        <div className='container'>
          <div className='main'>
            <div className='captureInfo'>
              <Name setFormInfo={this.setFormInfo.bind(this, 1)} title='Form Class' />
              <Name setFormInfo={this.setFormInfo.bind(this, 2)} title='Form Teacher' />
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
              setFormInfo={this.setFormInfo}
              setDOB={this.setDate}
              number={this.state.numInForm}/>
          </div>
        </div>
      )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
