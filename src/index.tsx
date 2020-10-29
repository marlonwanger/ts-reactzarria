import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ErrorBoundary from './error';

ReactDOM.render(
  <ErrorBoundary>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ErrorBoundary>,
  document.getElementById('root')
);
