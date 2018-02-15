import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick = {props.clic}>I'm {props.name}, and I love to play {props.game}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    );
}

export default person;