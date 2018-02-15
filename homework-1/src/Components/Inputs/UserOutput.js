import React from 'react'
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className='Output'>
            <p>El dueño de este párrafo es {props.nombre}</p>
            <p>Esto es solo un párrafo</p>
        </div>);
}

export default userOutput;