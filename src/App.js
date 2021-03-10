import React, { Component } from 'react';
// import logo from './logo.svg';
import Main from './components/MainComponent';
import { BrowserRoute } from "react-router-dom"
import './App.css';

class App extends Component{
  render(){

    return(
      <BrowserRoute>
        <div className="App">
          <Main/>
        </div>
      </BrowserRoute>

      
    );
  }
}

export default App;
