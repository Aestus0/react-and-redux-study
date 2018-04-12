import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClickCounter from './ClickCounter';
import registerServiceWorker from './registerServiceWorker';
import ControlPanel from "./ControlPanel";

ReactDOM.render(<ControlPanel />, document.getElementById('root'));
registerServiceWorker();
