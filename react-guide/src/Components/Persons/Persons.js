import React, { Component } from 'react'
import Person from '../Person/Person'

class Persons extends Component{
    render(){
        return this.props.persons.map((p, index) => {
            return <Person 
              name={p.name} 
              game={p.game}
              key={p.id}
              change={(event) => this.props.change(event, p.id)} 
              click={() => this.props.click(index)}/>
          })
    }
}

export default Persons;