import './App.css';
import Contacts from './components/Contacts';
import { Navbar } from './components/Navbar';
// import routes from './routes'
//import {useState} from 'react';
//import { Outlet } from 'react-router-dom';


function App() {
  //setting up diff pages
  return (
    <div className="App">
      <Navbar />
      <Contacts />
      {/* <button>+</button> */}
    </div>
  );
}

export default App;
