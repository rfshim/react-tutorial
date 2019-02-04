import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// data는 object 배열로 있음
// 각각의 object는 {}로 표현되고, key:value 형태 (java script 문법 참고)
// 변수 선언은 var/let/const가 있으며 아래 링크 참고
// https://gist.github.com/rfshim/70e2c24fc95d53041e4e8ba526a744e3
const data = [
  { title: 'Hello World', content: 'Hello 1234', writer: 'JESSE'},
  { title: 'Hello World1', content: 'Hello 1asdf234'},
  { title: 'Hello World2', content: 'Helasdflo 1234'},
  { title: 'Hello World3', content: 'Heladsflo 1234'},
  { title: 'Hello World4', content: 'Helasdblo 1234'},
  { title: 'Hello World5', content: 'Helsaeflo 1234'},
]

// 아래에 default로 export한 곳
// Component 이름은 항상 대문자로 시작 
class App extends Component {
  // constructor, React에서 생성자는 (C++ 와 달리) class 이름이 아닌 constucgtor라는 함수를 명시적으로 사용함
  // super()를 costructor에서 부르지 않으면 this가 초기화 되지 않아 접근 할수 없음
  constructor(props) {
    super(props)

    // state 변수 선언, {}로 object로 초기화
    this.state = { myVisitCounter: 0 }
    // 아래 bind는 왜 하는것인가? 
    this.addVisitCounter = this.addVisitCounter.bind(this)
    this.reset = this.reset.bind(this)
  }

  addVisitCounter() {
    this.setState({ myVisitCounter: this.state.myVisitCounter+1 })
  }

  reset() {
    this.setState({ myVisitCounter: 0 })
  }

  render() {
    const IconListRender = ({ writer, title, content, onClick }) => (
      <div onClick={onClick}>
        <p>{writer}</p>
        <code>{title}</code>
        <p>{content}</p>
        <hr/>
      </div>
    )

    const { myVisitCounter } = this.state

    return (
      <div>
        <h1>My Visit Counter: {this.state.myVisitCounter}</h1>
        <button onClick={this.reset}>
          Reset my counter
        </button>
        <MyBoard
          onClick={() => this.addVisitCounter()}
          boardId={() => Math.random()}
          data={data}
          visit={myVisitCounter}
          ListRender={IconListRender}
        />
      </div>
    );
  }
}

function MyBoard(props) {
  const { boardId, data, ListRender, onClick, myVisitCounter } = props
  return (
    <div id={boardId()}>
      <h1>{boardId()}: {myVisitCounter}</h1>
      <input type="text"/>
      {data.map(function(entry, entryIdx) {
        return <ListRender
          writer={entry.writer}
          title={entry.title}
          content={entry.content}
          key={entryIdx}
          onClick={onClick}
        />
      })}
    </div>
  )
}

// default 
export default App; 