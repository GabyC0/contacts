import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Form from './components/Form';
import {Delete} from './components/Delete';
import { SpecificContact } from './components/SpecificContact';
import {Edit } from './components/Edit';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/add' element={<Form />}/>
      <Route path='/delete' element={<Delete />}/>
      <Route path='/specific' element={<SpecificContact />}/>
      <Route path='/edit' element={<Edit/>}/>
    </Routes>
  </Router>,

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
