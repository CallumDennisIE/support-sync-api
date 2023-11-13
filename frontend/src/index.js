// React import
import React from 'react';

// Network based imports
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { CurrentUserProvider } from './contexts/CurrentUserContexts';
import reportWebVitals from './reportWebVitals';

// Style based import
import './index.css';

// Custom component import
import App from './App';

ReactDOM.render(
    <Router>
        <CurrentUserProvider>
            <App />
        </CurrentUserProvider>
    </Router>,
    document.getElementById('root')
);

reportWebVitals();
