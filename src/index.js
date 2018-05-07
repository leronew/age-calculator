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
          student: []
    };
  }

  setName = (number, e) =>{
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

      case 3:
        let tempCopy = Object.assign({}, this.state.student);
        let s = e.target.value;
        tempCopy[0].name = s;

        this.setState({student: tempCopy})
        console.log('first student ' + tempCopy[0].name)
        break;

        case 4:
          let tempsCopy = Object.assign({}, this.state.student);
          let r = e.target.value;
          tempsCopy[1].name = r;

          this.setState({student: tempsCopy})
          console.log('second student ' + tempsCopy[1].name)
          break;
      default:console.log('Good')
    }
  }

  setDate = (number, e) => {
    switch (number) {
      case 1:
        this.setState({
            endOfT1:e.target.value
        })
        console.log(this.state.endOfT1)
        break;

      case 2:
        this.setState({
          endOfT2:e.target.value
        })
        console.log(this.state.endOfT2)
        break;
      case 3:
        this.setState({
          endOfT3:e.target.value
        })
        console.log(this.state.endOfT3)
        break;
      default:console.log('Good')
    }
  }

  updateStudentState = (num) => {
    let temp = {name:'', dob: '', age: null, mother:'', father:'', contact:'',
    streetAdd:'', village:''}
    let tempArray = [];

    for(let index = 0; index < num; index++) {
      tempArray.push(temp)
    };

    this.setState({
      student: tempArray
    });
  }

  setNumberOfStudents = (e) => {
    this.setState({
      numInForm:e.target.value
    })

    this.updateStudentState(e.target.value);
  }

  render() {
      return(
        <div className='container'>
          <div className='main'>
            <div className='captureInfo'>
              <Name setName={this.setName.bind(this, 1)} title='Form Class' />
              <Name setName={this.setName.bind(this, 2)} title='Form Teacher' />
              <TotalNum setNumberOfStudents={this.setNumberOfStudents.bind(this)} numInForm='No. of Students'/>
            </div>
            <div className='captureInfo'>
              <Dates setDate={this.setDate.bind(this, 1)} date='End of Term 1' />
              <Dates setDate={this.setDate.bind(this, 2)}  date='End of Term 2' />
              <Dates setDate={this.setDate.bind(this, 3)}  date='End of Term 3' />
            </div>
          </div>
          <div className='studentsCards'>
            <GenerateCards setName={this.setName.bind(this)} number={this.state.numInForm}/>
          </div>
        </div>
      )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
