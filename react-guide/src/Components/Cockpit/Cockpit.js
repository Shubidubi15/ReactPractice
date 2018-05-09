import React from 'react'
import styles from './Cockpit.css'

const cockpit = (props) => {

    let buttonClass = '';
    buttonClass = props.show ? '' : styles.Red;
    console.log(props.show);
    console.log(buttonClass);

    return (
        <div>
            <h1 className={'ko'}>HOI!!</h1>
            <button 
            onClick = {props.toggle} 
            className={buttonClass}>Toggle Persons</button>
        </div>
    ) 
}

export default cockpit;