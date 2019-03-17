import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let initData = require('./testdata')

class MyBaord extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      data : initData,
      currentIndex : 0,
      buffer : {
        "name": "",
        "email": "",
        "dateTime": "",
        "ip": "",
        "subject": "",
        "content": ""
      },
      currentPage : 0
    }
    
    this.selectCurrentArticle = this.selectCurrentArticle.bind(this)
    this.writeBuffer = this.writeBuffer.bind(this)
    this.updateBuffer = this.updateBuffer.bind(this)
    this.selectPage = this.selectPage.bind(this)
  }

  // currentIndex를 변경하는 함수
  selectCurrentArticle(idx) {
    this.setState({
        ...this.state,
        currentIndex : idx
      }
    )
  }

  selectPage(idx) {
    console.log("pageIndex : ",idx )
    this.setState({
        ...this.state,
        currentPage : idx
      }
    )
  }

  // 임시용 buffer를 신규 데이터를 채우는 함수
  writeBuffer(key, data) {
    console.log(key, data)
    this.setState({
        ...this.state,
        buffer : {
          ...this.state.buffer,
          [key] : data
        }
      }
    )
  }

  // 임시 데이터를 기존 data에 앞에 넣고 채움
  updateBuffer() {
    this.setState({
      ...this.state, // 그냥 해주는 일. 이전꺼 깔아줌
      data : [
        {...this.state.buffer},
        ...this.state.data
      ]
    })
    
    console.log(this.state.data)
  }

  render() {
    return (
      <div>
        <h1>Board Title</h1>
        <hr/>
        <Body
          currentArticle = {this.state.data[this.state.currentIndex]}
          list = {this.state.data}
          buffer = {this.state.buffer}
          writeFunc = {this.writeBuffer}
          updateFunc = {this.updateBuffer}
          selectFunc = {this.selectCurrentArticle}
          currentPage = {this.state.currentPage}
          selectPage = {this.selectPage}
        />
      </div>
    );
  }
}

function Body (props) {
  const {
    currentArticle,
    list,
    buffer,
    writeFunc,
    updateFunc,
    selectFunc,
    currentPage,
    selectPage
  } = props

  // 각각의 render
  return(
    <div>
      <PrintData
        currentArticle={currentArticle}
      />
      <hr/>
      <WriteArea
        buffer={buffer}
        writeFunc={writeFunc}
        updateFunc={updateFunc}
      />
      <hr/>
      <PrintList
        list={list}
        selectFunc={selectFunc}
        currentPage={currentPage}
      />
      <PrintPage
        listLength={list.length}
        selectPage={selectPage}
      />
    </div>
  )
}

function PrintData(props) {
  const {currentArticle} = props
  
  return (
    <div>
      <h4>PrintData()</h4>
      <p>name : {currentArticle.name}</p>
      <p>email : {currentArticle.email}</p>
      <p>dateTime : {currentArticle.dateTime}</p>
      <p>ip : {currentArticle.ip}</p>
      <p>subject : {currentArticle.subject}</p>
      <p>content : {currentArticle.content}</p>
    </div>
  )
}

function WriteArea(props) {
  const {writeFunc, updateFunc, buffer} = props

  return(
    <div>
      <h4>WriteArea()</h4>

      <p>
        <label>이름 : </label>
        <input
          type="text"
          value={buffer.name}
          onChange={(ev) => writeFunc("name", ev.target.value)}
        />
      </p>
      <p>
        <label>E-mail : </label>
        <input
          type="text"
          value={buffer.email}
          onChange={(ev) => writeFunc("email", ev.target.value)}
        />
      </p>
      <p>
        <label>Time : </label>
        <input
          type="text"
          value={buffer.dateTime}
          onChange={(ev) => writeFunc("dateTime", ev.target.value)} 
        />
      </p>
      <p>
        <label>IP : </label>
        <input
          type="number"
          value={buffer.ip}
          onChange={(ev) => writeFunc("ip", ev.target.value)}
        />
      </p>
      <p>
        <label>주제 : </label>
        <input
          type="text"
          value={buffer.subject}
          onChange={(ev) => writeFunc("subject", ev.target.value)}
        />
      </p>
      <p>
        <label>내용: </label>
        <textarea
          resize="none"
          rows="2"
          value={buffer.contents}
          onChange={(ev) => writeFunc("content", ev.target.value)}
        />
      </p>

      <button onClick={updateFunc}>
        등록하기
      </button>
    </div>
  )
}

function PrintList(props) {
  const {list, selectFunc, currentPage} = props
  const startIdx = currentPage * 10
  const newList = Array()

  for(let i=0; i < 10; i ++) {
    if(currentPage*10+i < list.length)
     newList.push(list[startIdx + i])
  }
  
  return(
    <div>
      <h3>PrintList()</h3>
      <p>
        {
          newList.map(
            (data, idx) => {
              return(
                <ul key={idx} onClick={() => selectFunc(idx)}>
                  {idx+(currentPage*10)} : {data.subject}
                </ul>
              )
            }
          )
        }
      </p>
    </div>
  )
}

function PrintPage(props) {
  const {listLength, selectPage} = props
  const pageLength = listLength / 10
  const pages = Array()

  for (let idx = 0; idx < pageLength; idx ++) { 
      pages.push(idx+1)
  }
  
  console.log("pageLength : ", pageLength, pages)
  
  return(
    <div>
      <p>PrintPage</p>
      <p>
        {pages.map(
          (data,idx) => 
          <td key={idx} onClick={() => selectPage(idx)}>
            {data+"."}            
          </td>
        )
        }
      </p>      
    </div>
  )
}

// default
export default MyBaord;
