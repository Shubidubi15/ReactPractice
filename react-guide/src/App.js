import React, { Component, createElement } from 'react';
import styles from './App.css';
import Person from './Components/Person/Person';

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
    let buttonClass = '';
    buttonClass = this.state.show ? '' : styles.Red;
    return (
      <div className={styles.App}>
        <h1 className={'ko'}>HOI!!</h1>
        { 
          this.state.show && 
          <div >
            {
              this.state.persons.map((p, index) => {
                return <Person name={p.name} game={p.game} key={p.id} change={(event) => this.changedHandler(event, p.id)} click={() => this.deletePerson(index)}/>
              })
            }
          </div>
        }
        <button onClick = {this.togglePersonHandler} className={buttonClass}>Toggle Persons</button>
      </div>
    )
  }
}

export default App;
