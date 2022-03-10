// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import {MoralisProvider} from 'react-moralis'

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <MoralisProvider
        appId='o8C4ooSXYjnwMwoCmEHYbwzFZI4btzdZuwIHrSZM'
        serverUrl='https://lyzcfadfbrj6.usemoralis.com:2053/server'
        initializeOnMount={true}
        >
          <App />
      </MoralisProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);


//initializeOnMount={false}