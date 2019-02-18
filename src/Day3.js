import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Day3 extends Component {
  constructor(props) {
    super(props)

    this.state = {myText : ""}

    this.updateText = this.updateText.bind(this)
    this.checkState = this.checkState.bind(this)
  }

  updateText(ev) {
    this.setState({myText : ev.target.value})
//    console.log(ev.target.value)
//    console.log(this.state.myText)
  }

  checkState() {
    console.log(this.state.myText)
  }

  render(){
    return(
      <div>
      <h1> Hello My Input text</h1>
      <MyInput text={this.state.myText} updateText={this.updateText}/>
      <button onClick={this.checkState}>
        check
      </button>
      </div>
    )
  }
}

function MyInput(props) {
  const {text, updateText} = props
  return (
    <div>
      <input
        value ={text} 
        onChange = {updateText}
      />
     </div>
  ) 
}

export default Day3;
