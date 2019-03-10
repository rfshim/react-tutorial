import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//const myData = require('./testdata.json')
//import myData from './testdata.json'
let myData = require('./testdata.json')

class Day3Test2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textIndex : 0,
      newData : [
        "name",
        "email",
        "dateTime",
        "ip",
        "subject",
        "contents"
      ]
    }
    
    this.clickSubject = this.clickSubject.bind(this)
    this.updateText = this.updateText.bind(this)
    this.insertOne = this.insertOne.bind(this)
  }

  clickSubject(newIndex) {
    this.setState({textIndex : newIndex})
  }

  updateText(ev, idx) {
    console.log("ev.target.value :" + ev.target.value)
    console.log("index : " + idx)
    console.log("this.state.newData : ", this.state.newData)

    const temp = this.state.newData
    temp[idx] = ev.target.value

    this.setState({newData : temp})
  }

  insertOne() {
    const len = myData.length
    console.log("myData : ", myData)
    console.log("len : ", len)
    
    myData.push(
      {
        name : this.state.newData[0],
        email : this.state.newData[1],
        dateTime : this.state.newData[2],
        ip : this.state.newData[3],
        subject : this.state.newData[4],
        content : this.state.newData[5]
      }
    )
    this.setState({textIndex : len})
  }

  render(){
    return(
      <div>
        <h1>React 3일차</h1>
        <hr/>
        <PrintArticle current={myData[this.state.textIndex]} index={this.state.textIndex} len={myData.length}/>
        <hr/>
        <GetInputData newData={this.state.newData} updateText={this.updateText}/>
        <button onClick={this.insertOne}>UpdateData</button>
        <hr/>
        <PrintList datalist={myData} clickfunc={this.clickSubject}/>
      </div>
    )
  }
}

function GetInputData(props) {
  const {newData, updateText} = props
/** 이름만 나오게...
  return (
    <div>
      <label>
        이름 :
        <input
          value ={newData} 
          onChange = {updateText}
        />
      </label>
   </div>
  );
*/
  return (
    <div>
      {newData.map((data, idx) =>
        <li key={idx}>
          <label>
            {idx} :
            <input 
              value = {data}
              onChange = {(ev) => {updateText(ev, idx)}}
            />
          </label>
        </li>
      )}
    </div>
  );
}

function PrintArticle(props) {
  const {current, index, len} = props
  console.log("current : " + current)
  return (
    <div>
      <h3>index : {index} / length : {len}</h3>
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

export default Day3Test2;
