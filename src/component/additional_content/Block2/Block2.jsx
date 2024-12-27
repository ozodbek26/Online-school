import React from 'react'
import './Block2.css'

export default function Block({ img1, img2, text }) {
    return (
        <div className='block'>
            <div className='block_image'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
            </div>
            <h3>{text}</h3> 
        </div>
    )
}
