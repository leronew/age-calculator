import React from 'react';
import ReactDOM from 'react-dom';
import Dates from './components/date.js';
import Name from './components/names.js';
import TotalNum from './components/number.js';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const GenerateCards = (props) =>{
  const cards = [];
    for(let i = 1; i <= props.number; i++) {
      cards.push(
        <div key={i}>
          <Name title='Student Name' onChange={props.onChange}/>
          <Dates date='DOB' />
        </div>
      )
  }
  return cards
}

class Index extends React.Component{
  constructor(props){
    super(props);
    this.state = {
          form:'',
          numInForm:1,
          endOfT1:'',
          endOfT2:'',
          endOfT3:'',
          teacher:'',

      student: [
        {
          name:'',
          dob: '',
          age: null,
          mother:'',
          father:'',
          contact:'',
          streetAdd:'',
          village:''
        }
      ]
    };
  }


  setName = (number, e) =>{
    switch (number) {
      case 1:
        this.setState({
          form:e.target.value
        })
        let x = this.state.form
        console.log(x)
        break;

      case 2:
        this.setState({
          teacher:e.target.value
        })
        let y = this.state.teacher
        console.log(y)
        break;
      default:console.log('Good')
    }
  }

  getDate = (number, e) => {
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

  setNumberOfStudents = (number, event) => {
    this.setState({
      numInForm:event.target.value
    })
    console.log(event.target.value);
  }

  render() {
      return(
        <div className='main'>
          <div className='captureInfo'>
            <Name setName={this.setName.bind(this, 1)} title='Form Class' />
            <Name setName={this.setName.bind(this, 2)} title='Form Teacher' />
            <TotalNum setNumberOfStudents={this.setNumberOfStudents.bind(this, 9)} numInForm='No. of Students'/>
          </div>
          <div className='captureInfo'>
            <Dates getDate={this.getDate.bind(this, 1)} date='End of Term 1' />
            <Dates getDate={this.getDate.bind(this, 2)}  date='End of Term 2' />
            <Dates getDate={this.getDate.bind(this, 3)}  date='End of Term 3' />
          </div>
          <div>
            <GenerateCards onChange={this.setName} number={this.state.numInForm}/>
          </div>
        </div>
      )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
