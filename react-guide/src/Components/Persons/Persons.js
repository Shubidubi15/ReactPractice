import React from 'react'
import Person from '../Person/Person'

const persons = (props) => 
    props.persons.map((p, index) => {
        return <Person 
          name={p.name} 
          game={p.game}
          key={p.id}
          change={(event) => props.change(event, p.id)} 
          click={() => props.click(index)}/>
      })

      export default persons;