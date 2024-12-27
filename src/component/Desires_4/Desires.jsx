import React from 'react'
import './Desires.css'
import Block from '../additional_content/block-content/Block'
import f1 from '../image/Иконка (1).png'
import f2 from '../image/Highlight 26.png'


export default function Desires() {
    return (
        <div className='Desires'>
            <div className='Desires_text'>
                Но при этом в глубине души вы хотите:
            </div>
            <div className='Desires_Scroll'>
                <Block src1={f2} src2={f1} text={'Свободно говорить на английском в путешествиях'} />
                <Block src1={f2} src2={f1} text={'Свободно говорить на английском в путешествиях'} />
                <Block src1={f2} src2={f1} text={'Свободно говорить на английском в путешествиях'} />
                <Block src1={f2} src2={f1} text={'Свободно говорить на английском в путешествиях'} />
                <Block src1={f2} src2={f1} text={'Свободно говорить на английском в путешествиях'} />
                <Block src1={f2} src2={f1} text={'Свободно говорить на английском в путешествиях'} />
            </div>
        </div>
    )
}


