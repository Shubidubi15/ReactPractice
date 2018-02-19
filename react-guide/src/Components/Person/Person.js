import React from 'react';
import styles from './Person.css';

const person = (props) => {
    return (
        <div className={styles.Person}>
            <p onClick = {props.click}>I'm {props.name}, and I love to play {props.game}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    );
}

export default person;