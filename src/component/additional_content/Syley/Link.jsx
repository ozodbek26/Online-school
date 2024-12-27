import React from 'react'
import './Syley.css'

export default function Link({ a, href }) {
    return (
        <div>
            <a className='syley' href={href}> {a}</a>
        </div>
    )
}
