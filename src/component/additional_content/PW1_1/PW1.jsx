import React from 'react'
import './PW1.css'

export default function Programw({ button, text1, text2, text3, text4, text5 }) {
    return (
        <div className='PW1'>
            <div className='PW1_button'>
                <button className='button PW1_text1 '>{button}</button>
                <h3 className='PW1_text1'>·{text1}</h3>
            </div>
            <p className='PW1_text1'>·{text2}</p>
            <p className='PW1_text1' >·{text3}</p>
            <p className='PW1_text1'>·{text4}</p>
            <p className='PW1_text1'>·{text5}</p>
        </div>
    )
}
