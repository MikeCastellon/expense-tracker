import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import {Provider} from './context/context';

import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId='065306b2-db64-485d-8f30-ef4cf65da507' language='en-US'> 
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>, 
    document.getElementById('root')
);