import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//live-server public