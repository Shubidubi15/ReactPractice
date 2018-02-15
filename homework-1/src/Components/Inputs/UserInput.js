import React from 'react'

const userInput = (props) => {
    const style = {
        boxShadow: '0 3px 3px #eee',
        padding: '20px',
        textAlign: 'center',
        border: '1px solid #eee',
        margin: '10px'
      }

    return (
        <div style={style}>
            <input type="text" onChange={props.change} value={props.nombre}/>
        </div>);
}

export default userInput;