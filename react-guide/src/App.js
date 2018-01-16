import React, { Component, createElement } from 'react';
import './App.css';
import Person from './Components/Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>HOI!!</h1>
        <Person/>
      </div>
    )
  }
}

export default App;
