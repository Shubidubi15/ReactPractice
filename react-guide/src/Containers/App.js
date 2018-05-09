import React, { Component, createElement } from 'react';
import styles from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit'

class App extends Component {
    state = {
      persons: [
        { id: '123', name: "Erick", game: "Bayonetta" },
        { id: '423ds', name: "Ricardo", game: "GTA V" },
        { id: 'sdfv', name: "Gus", game: "Rust" }
      ],
      show: true
    }

    changedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex((p) => {
        return p.id === id;
      })
      const person = {...this.state.persons[personIndex]};
      person.name = event.target.value;
      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState({
        persons: persons
      })
    }

    togglePersonHandler = () => {
      const doesShow = this.state.show;
      this.setState({show: !doesShow});
    }

    deletePerson = (index) => {
      const persons = [...this.state.persons];
      persons.splice(index, 1);
      this.setState({persons: persons});
    }

  render() {
    return (
      <div className={styles.App}>
      <Cockpit 
      show={this.state.show}
      toggle={this.togglePersonHandler}
      />
        { 
          this.state.show && 
          <div >
            <Persons 
            persons={this.state.persons}
            click={this.deletePerson}
            change={this.changedHandler}/>
          </div>
        }
      </div>
    )
  }
}

export default App;
