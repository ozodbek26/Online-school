import React from 'react'
import './Teachers.css'
import leading from '../image/Фото ведущего.png'
import certificate from '../image/Сертификат CAE.png'
import Vector from '../image/Vector.png'
import number from '../image/Номер.png'

import Vector1 from '../image/Vector (1).png'
import number1 from '../image/Номер (1).png'

import Vector2 from '../image/Vector (2).png'
import number2 from '../image/Номер (2).png'

import Vector3 from '../image/Vector (3).png'
import number3 from '../image/Номер (3).png'





export default function Teachers() {
    return (
        <div className='Teachers'>
            <div className='Teachers_block1'>
                <img className='Teachers_block1_leading' src={leading} alt="leading" />
            </div>
            <div className='Teachers_block2 bg '>
                <div>
                    <div className='Teachers_block2_number'>
                        <img src={Vector} alt="Vector" />
                        <img src={number} alt="number1" />
                    </div>
                    <h2 className='Teachers_block2_text'>Редактор англоязычного  издания 2008-2009</h2>
                </div>
            </div>
            <div className='Teachers_block3 bg '>
                <div>
                    <div className='Teachers_block2_number'>
                        <img src={Vector1} alt="Vector" />
                        <img src={number1} alt="number1" />
                    </div>
                    <h2 className='Teachers_block2_text'>В 2008 году основал Школу английского языка «Черчилль» с уже более 20 000 студентов по всему миру</h2>
                </div>
            </div>
            <div className='Teachers_block4 bg '>
                <div>
                    <div className='Teachers_block2_number'>
                        <img src={Vector2} alt="Vector" />
                        <img src={number2} alt="number1" />
                    </div>
                    <h2 className='Teachers_block2_text'>Автор метода «English is an Island»</h2>
                </div>
            </div>
            <div className='Teachers_block5 bg '>
                <div>
                    <div className='Teachers_block2_number '>
                        <img src={Vector3} alt="Vector" />
                        <img src={number3} alt="number1" />
                    </div>
                    <h2 className='Teachers_block2_text'>Сертификаты FCE, CAE</h2>
                </div>
            </div>
            <div className='Teachers_block6'>
                <img className='Teachers_block6_certificate' src={certificate} alt="certificate" />
            </div>
        </div>
    )
}

