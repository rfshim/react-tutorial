import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//const myData = require('./testdata.json')
import myData from './testdata.json'

class Day3_2 extends Component {
  constructor(props) {
    super(props)
    this.state = {textIndex : 0, myText : ""}
    
    this.clickSubject = this.clickSubject.bind(this)
    this.updateText = this.updateText.bind(this)
}

  clickSubject(newIndex) {
    this.setState({textIndex : newIndex})
  }

  updateText(ev) {
    this.setState({myText : ev.target.value})
  }

  render(){
    return(
      <div>
        <h1>React 3일차</h1>
        <hr/>
        <PrintArticle current={myData[this.state.textIndex]}/>
        <hr/>
        <GetInputData myText={this.state.myText} updateText={this.updateText}/>
        <hr/>
        <PrintList datalist={myData} clickfunc={this.clickSubject}/>
      </div>
    )
  }
}

function GetInputData(props) {
  const {myText, updateText} = props

  return (
    <div>
      <label>
        이름 :
        <input
          value ={myText} 
          onChange = {updateText}
        />
      </label>
   </div>
  );
}

function PrintArticle(props) {
  const {current} = props
  //console.log("current : " + current)
  return (
    <div>
      <p>name : {current.name}</p>
      <p>email : {current.email}</p>
      <p>dateTime : {current.dateTime}</p>
      <p>ip : {current.ip}</p>
      <p>subject : {current.subject}</p>
      <p>content : {current.content}</p>
    </div>
  );
}

function PrintList(props){
  const {datalist, clickfunc} = props
  return (
    <div>
    {datalist.map((datalist, idx) =>
      <li key={idx} onClick={() => clickfunc(idx)}>
        {idx} : {datalist.subject}
      </li>
    )}
    </div>
  );
}

export default Day3_2;
