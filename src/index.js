import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const data = [
  {key:'q', keycode:81, source: 'Dsc_Oh'},
  {key:'w', keycode:87, source: 'Cev_H2'},
  {key:'e', keycode:69, source: 'Kick_n_Hat'},
  {key:'a', keycode:65, source: 'punchy_kick_1'},
  {key:'s', keycode:83, source: 'RP4_KICK_1'},
  {key:'d', keycode:68, source: 'Brk_Snr'},
  {key:'z', keycode:90, source: 'side_stick_1'},
  {key:'x', keycode:88, source: 'Heater-6'},
  {key:'c', keycode:67, source: 'Give_us_a_light'},
]

ReactDOM.render(<App drums={data} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
