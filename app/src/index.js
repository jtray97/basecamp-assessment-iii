import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Apple} from './App';
import {Pear} from './App';
import {HelpMe} from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Pear />, document.getElementById('root'))
ReactDOM.render(<Apple />, document.getElementById('apple'))
ReactDOM.render(<HelpMe />, document.getElementById("HelpMe"))
