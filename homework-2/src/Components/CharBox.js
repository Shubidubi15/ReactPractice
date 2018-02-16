import React from 'react'
import './shared.css'

const CharBox = (props) => {
    return (
        <div className='CharBox' onClick={props.click}>
            <h3>{props.letter}</h3>
        </div>
    )
};

export default CharBox;