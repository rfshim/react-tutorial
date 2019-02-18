import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Day1 from './Day1';
//import Day3 from './Day3';
import Day3_2 from './Day3_2';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Day1 />, document.getElementById('root'));
//ReactDOM.render(<Day2 />, document.getElementById('root'));
ReactDOM.render(<Day3_2 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
