import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const data = require('./data.json')
//const data = import('./data.json')  //이렇게도 가능...

class NewApp extends Component {
  constructor(props) {
    super(props)
    this.state = {indexNum : 0, clickCounter:0}

    this.goPrev = this.goPrev.bind(this)
    this.goNext = this.goNext.bind(this)
  }

  goPrev() {
    this.setState({clickCounter : this.state.clickCounter + 1})
    if(this.state.indexNum > 0)
      this.setState({indexNum : this.state.indexNum - 1})
  }

  goNext() {
    this.setState({clickCounter : this.state.clickCounter + 1})
    if(this.state.indexNum < data.length - 1)
      this.setState({indexNum : this.state.indexNum + 1})
  }

  render(){
    console.log("index : ", this.state.indexNum)
    console.log("length : ", data.length)
    return(
      <div>
      <h1> Hello My Data</h1>
      <h1> Click Counter : {this.state.clickCounter}</h1>
      <MyData data={data[this.state.indexNum]}
      goPrevPage={this.goPrev}
      goNextPage={this.goNext}
      />
      </div>
    )
  }
}

function MyData(props) {
  const {data, goPrevPage, goNextPage} = props
  return (
    <div align="center">
      <p>ID : {data.writeId}</p>
      <p>Name : {data.categoryName}</p>
      <p>subject : {data.subject}</p>
      <p>description : {data.description}</p>
      <p>hitCount : {data.hitCount} /
      goodCount : {data.goodCount} /
      noGoodCount : {data.noGoodCount} /
      noGoodCount : {data.noGoodCount}</p>
      <hr/>
      <button onClick={goPrevPage}>이전글</button>
      <button onClick={goNextPage}>다음글</button>
    </div>
  );
}

export default NewApp;
