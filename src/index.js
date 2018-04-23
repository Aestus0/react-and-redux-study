import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ControlPanel from './views/ControlPanel';
import {Provider} from "react-redux";
import store from './Store';

ReactDOM.render(
    <Provider store={store}>
        <ControlPanel />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
