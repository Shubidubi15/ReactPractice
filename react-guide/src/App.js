import React, { Component, createElement } from 'react';
import './App.css';
import Person from './Components/Person/Person'

class App extends Component {
    state = {
      persons: [
        { name: "Erick", game: "Bayonetta" },
        { name: "Ricardo", game: "GTA V" },
        { name: "Gus", game: "Rust" }
      ],
      show: true
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

    togglePersonHandler = () => {
      const doesShow = this.state.show;
      this.setState({show: !doesShow});
    }

  render() {
    const style = {
      backgroundColor: 'steelblue',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      color: 'white',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>HOI!!</h1>
        { 
          this.state.show && 
          <div >
            <Person change={this.changedHandler} name = {this.state.persons[0].name} game = {this.state.persons[0].game}></Person>
            <Person clic={() => this.switchNameHandler('Richi')} name = {this.state.persons[1].name} game = {this.state.persons[1].game}></Person>
          </div>
        }
        <button onClick = {this.togglePersonHandler} style={style}>Toggle Persons</button>
      </div>
    )
  }
}

export default App;
