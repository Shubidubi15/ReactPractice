import React, { Component } from 'react';
import './App.css';
import UserOutput from './Components/Inputs/UserOutput';
import UserInput from './Components/Inputs/UserInput';

class App extends Component {
  state = {
    userName: 'Godofredo'
  }

  onChangeHandler = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserOutput nombre = {this.state.userName} />
        <UserOutput nombre = {this.state.userName} />
        <UserOutput nombre = {this.state.userName} />
        <UserInput change = {this.onChangeHandler.bind(this)} nombre = {this.state.userName}/>
      </div>
    );
  }
}

export default App;
