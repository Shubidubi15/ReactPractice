import React, { Component, createElement } from 'react';
import './App.css';
import Person from './Components/Person/Person'

class App extends Component {
    state = {
      persons: [
        { name: "Erick", game: "Bayonetta" },
        { name: "Ricardo", game: "GTA V" },
        { name: "Gus", game: "Rust" }
      ]
    }

    switchNameHandler = (newName) => {
      this.setState({
        persons: [
          { name: "Erick", game: "Bayonetta" },
          { name: newName, game: "GTA V" },
          { name: "Gus", game: "Rust" }
        ]
      })
    }

    changedHandler = (event) => {
      this.setState({
        persons: [
          { name: event.target.value, game: "Bayonetta" },
          { name: 'Ricardo', game: "GTA V" },
          { name: "Gus", game: "Rust" }
        ]
      })
    }

  render() {
    return (
      <div className="App">
        <h1>HOI!!</h1>
        <Person change={this.changedHandler} name = {this.state.persons[0].name} game = {this.state.persons[0].game}></Person>
        <Person clic={() => this.switchNameHandler('Richi')} name = {this.state.persons[1].name} game = {this.state.persons[1].game}></Person>
        <button onClick = {this.switchNameHandler.bind(this, 'Richard')}>Change name</button>
      </div>
    )
  }
}

export default App;
