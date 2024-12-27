import React from 'react'
import './Block.css'

export default function Block({ src1, src2, text }) {
  return (
    <div className='block'>
      <div className='block_image'>
        <img className='img1' src={src1} alt="" />
        <img className='img2' src={src2} alt="" />
      </div>
      <p className='bloc_text' > {text} </p>
    </div>
  )
}
