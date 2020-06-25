import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
    <Router>
    <Navbar/>
    
    
    </Router>
    
    
    </React.Fragment>
  );
}

export default App;
