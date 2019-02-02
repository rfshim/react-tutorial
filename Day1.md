# Atom 설치
* language-babel 설치 필요함

# Chrome extension 설치
* React Dev Tools

# Java Destructing

# Functional Component
* Dope는 대부분 Functional Component로 구성됨

# Props vs State
1. State가 업데이트 되면 React는 자동으로 render 한다.
2. Props
```
// props는 인자로 일일이 지정하지 않고 통째로 넘겨도 처리할수 있다.
// 부모가 자식에 와장창 념겨주는게 가능???
function helloworld(props) {
  const { yes, no, myCurrentState } = props
  console.log(
    myCurrentState ? yes : no
  )
}

const yes = 'yes'
const no = 'no'

helloworld({ yes, no, myCurrentState: true })
helloworld({ yes, no, myCurrentState: false })
```

# 기본 React 파일의 구조에 따른 설명
> index.html(div id=root) --> index.js(ReactDOM.render()) --> App.js (default APP class.render())
1. ./public/index.html
* localhost:3000으로 접근시 기본 틀을 render 하는 전체 body
* 아래 body의 div(division) 기본 구역을 만들고, 해당 구역의 id를 "root"로 명명
```
...
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.
...
```
2. ./src/index.js
* 'root' id인 element부분에서 App(축약형, App.js의 default render)를 ReactDOM render 수행
* react에서 .js / .json은 자동을 붙이므로 안쓸수 있다.
* import에서 ./App에서 뒷부분에 .js가 축약된것임

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));  // 여기서 render 수행

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
```

3. ./src/App.js
* 실제로 rendering을 하는 main 코드
```
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;  // App이 default로 render하는 class
```

# How npm handles the "scripts" field
 https://docs.npmjs.com/misc/scripts

# 1일차 tutorial github repository
https://github.com/kjessec/react-tutorial
```
mkdir 1st_tutorial
cd 1st_tutorial

// git으로 현재 디렉토리 하위를 관리하기 위해 초기화 수행
git init      

//현재 working directory를 remote 저장소에(https://github....) 추가하여 github에서 관리하며, 이름은 jhshim_origin
git remote add jhshim_origin https://github.com/kjessec/react-tutorial.git 

// jhshim_origin에 원격의 master에서 모든 데이터를 가져와서 자동 merge도 수행
// git pull 명령은 Clone 한 서버에서 데이터를 가져오고 그 데이터를 자동으로 현재 작업하는 코드와 Merge 시킨다.
git pull jhshim_origin master

// 원격의 모든 데이터를 가져옴 (자동 merge 안함)
// git fetch 명령은 리모트 저장소의 데이터를 모두 로컬로 가져오지만, 자동으로 Merge 하지 않는다. 
git fetch jhshim_origin 

// tutorial1 브랜치로 이동
git checkout tutorial1

npm install
npm run start
```