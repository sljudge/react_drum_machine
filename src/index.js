import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const data = [
  {key:'q', keycode:81, source: 'kick1'},
  {key:'w', keycode:87, source: 'break1'},
  {key:'e', keycode:69, source: 'kick2'},
  {key:'a', keycode:65, source: 'snare1'},
  {key:'s', keycode:83, source: 'hat1'},
  {key:'d', keycode:68, source: 'perc1'},
  {key:'z', keycode:90, source: 'snare2'},
  {key:'x', keycode:88, source: 'hat2'},
  {key:'c', keycode:67, source: 'perc2'},
]

ReactDOM.render(<App drums={data} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
