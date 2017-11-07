import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  // getName() {
  //   var myname = prompt('Enter your name:');
  //     return myname;
  // }
  // constructor() {
  //   super();
  //   this.name = 'Mamba';
  // }


  render() {
    // var style = {
    //   color: 'red',
    //   fontStyle: 'italic'
    // }

    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello {}</h1>
        </div>
        
      </div>
    );
  }
}

export default App;
