import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick = {props.clic}>I'm {props.name}, and I love to play {props.game}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    );
}

export default person;