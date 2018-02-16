import React from 'react'
import './shared.css'

const Validation = (props) => {
   return (
       <div>
        {props.charNum >= 8 && (<p className='Valid'>Logitud suficiente</p>)}
        {props.charNum < 8 && (<p className='Invalid'>Longitud Insuficiente</p>)}
       </div>
   )
};

export default Validation;