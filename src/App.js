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
    // 만약 bind 하지 않으면....
    // reset 버튼 클릭시 TypeError: Cannot read property 'setState' of undefined 발생
    // visitCounter는 정상 동작???
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
    // 실제로 각각의 list를 render해주는 기능을 함수로 정의하고 이를 props로 넘겨줌
    // 어디서 넘기냐면.. return 으로 그려주는곳...
    // 각각의 부분을 click할때 마다 동작을 해야 하므로, div에 onClick을 붙여둠
    // IconListRender는 함수형 component, https://reactjs.org/docs/components-and-props.html
      <div onClick={onClick}>
        <p>{writer}</p>
        <code>{title}</code>
        <p>{content}</p>
        <hr/>
      </div>
    )

    // constructor에서 state 변수로 초기화 했는데.. 여기 this.state를 해주는 이유가 뭐임?
    // 안해주면 아래와 같이 onClick에서 no-undef 발생함
    // Line 69:  'myVisitCounter' is not defined  no-undef
    const { myVisitCounter } = this.state

    return (
      // 전체 render 부분...
      // 1) 굵은글씨로 Visit counter를 출력
      // 2) 버튼을 만들고, 클릭될때 마다 bind된 reset 함수를 호출
      // 3) MyBoard 부분을 그리고 props로 하위에 필요한거 넘겨줌.
      //    onClick 함수(addVisitCounter), boardId 함수 (random 출력), data(실제 데이터부분), visitcounter ??, ListRender 함수
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

// class 밖에 선언하는 함수는 function 이라고 명시적으로 표기
function MyBoard(props) {
  // board id, data 들...., data를 그리는 함수, onClick(), myVisitCounter함수를 ...
  // props에서 넘어온거에서 저장해두고..
  // myVisitCounter는 넘겨온게 엄는데.. vist으로 가져와야 하는게 아닐까?
  const { boardId, data, ListRender, onClick, myVisitCounter } = props

  // 각각의 그리는데..
  // 여러개 그릴때는 div별 unique id를 줘야 하는데.. 여기서는 div id를 왜 주었을가???
  // 1) 먼저 랜덤값을 굵게 출력하는데, myVisitCounter가 아닌 visit으로 받아와야 정상적으로 visit counter를 출력
  // 2) text box 하나 아무의미 없이 그리고
  // 3) 각각의 data 부분을 출력.. { }로 묶어서 변수부분을 만들고
  //    여러개 값은 data.map()으로 하나씩 그리는데... function(entry, entryIdx) { } 인데... 위에 알려준 그리는 함수 ListRender에 데이터만 채움
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
      })
      }
    </div>
  )
}

// default
export default App;
