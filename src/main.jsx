import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MedicalForm from './form.jsx';
import Page from './Page.jsx';
//import './custom.css'
import Step from './step.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
