import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SimpleReactLightBox from 'simple-react-lightbox'

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightBox>
      <App />
    </SimpleReactLightBox>
  </React.StrictMode>,
  document.getElementById('root')
);
