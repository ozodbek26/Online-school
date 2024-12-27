import React from 'react'
import './Button.css'   

export default function Button ( {button} ) {
    return (
        <div>
        <button className='button' >{button}</button>
        </div>
    )
}
