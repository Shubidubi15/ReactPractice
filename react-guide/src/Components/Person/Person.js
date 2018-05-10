import React, { Component } from 'react';
import styles from './Person.css';

class Person extends Component{
    render(){
        return (
            <div className={styles.Person}>
                <p onClick = {this.props.click}>I'm {this.props.name}, and I love to play {this.props.game}</p>
                <input type="text" onChange={this.props.change} value={this.props.name}/>
            </div>
        );
    }
} 
export default Person;