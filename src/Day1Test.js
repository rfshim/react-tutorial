import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// 기지국 정보 data
const EnbInfo = [
  {enbid:"0", enbname:"KDDI LSM", enbtype:"LSM"},
  {enbid:"10101", enbname:"KDDI eNB10101", enbtype:"eNB"},
  {enbid:"10102", enbname:"KDDI eNB10102", enbtype:"eNB"},
  {enbid:"10103", enbname:"KDDI eNB10103", enbtype:"eNB"},
  {enbid:"10104", enbname:"KDDI eNB10104", enbtype:"eNB"}
]

class NewApp extends Component {
  constructor(props) {
    super(props)

    // state object... 3가지 상태 관리
    this.state = {myid : "", myname : "", mytype:""}
    this.state = {myvisitcounter : 0 }

    // state내의 3가지 정보를 관리하는 함수 bind
    this.updateInfo = this.updateInfo.bind(this)
    this.setCounter = this.setCounter.bind(this)
  }

  updateInfo(props) {
    const {enbid, enbname, enbtype} = props
    this.setState({myid : enbid, myname : enbname, mytype : enbtype})
  }

  setCounter() {
    this.setState({myvisitcounter : this.state.myvisitcounter+1})
  }

  render(){
    const { enbid, enbname, enbtype } = this.state
    const { myvisitcounter } = this.state

    const EnbListRender = ({ enbname, enbid, enbtype, onClick}) => (
      <div onClick={onClick}>
        <hr/>
        <p>eNB info : {enbid} / {enbname} / {enbtype}</p>
      </div>
    )

    return (
      <div>
        <h1>My eNB Information</h1>
        <p>Current eNB Info : {this.state.myid} / {this.state.myname}</p>
        <p>visit counter : {myvisitcounter}</p>
        <hr/>
        <ENB
          onClick = {() => this.setCounter()}
          //onClick = {() => this.updateinfo()}
          information = {EnbInfo}
          EnbListRender = {EnbListRender}
        />
      </div>
    );
  }
}

function ENB(props) {
  const {information, EnbListRender, onClick} = props
  return (
    <div>
      <h2>ENB info</h2>
      <input type="text"/>
      {information.map(function(entry, entryIdx){
        return <EnbListRender
          enbname={entry.enbname}
          enbtype={entry.enbtype}
          enbid={entry.enbid}
          onClick={onClick}
        />
      })
      }
    </div>
  )
}

export default NewApp;
