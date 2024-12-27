import React from 'react'
import './Scroll.css'
import Block from '../additional_content/block-content/Block'
import icon from '../image/icon.png'
import Highlight from '../image/Highlight 26.png'


export default function Scroll() {
    return (
        <div className='main'>
            <div className='main_text'>Если вы:</div>
            <div className='main_Scroll'>
                <Block src1={Highlight} src2={icon} text={'Не знаете, с чего начать'} />
                <Block src1={Highlight} src2={icon} text={'Учили язык, но бросили, и теперь непонятно, как вернуться в стабильный график'} />
                <Block src1={Highlight} src2={icon} text={'Вам сложно найти даже 20 минут в день на изучение языка'} />
                <Block src1={Highlight} src2={icon} text={'Кажется, что учить английский уже поздно'} />
                <Block src1={Highlight} src2={icon} text={'Не знаете, с чего начать'} />
                <Block src1={Highlight} src2={icon} text={'Не знаете, с чего начать'} />
                <Block src1={Highlight} src2={icon} text={'Не знаете, с чего начать'} />
                <Block src1={Highlight} src2={icon} text={'Не знаете, с чего начать'} />
                <Block src1={Highlight} src2={icon} text={'Не знаете, с чего начать'} />
                <Block src1={Highlight} src2={icon} text={'Не знаете, с чего начать'} />
                <Block src1={Highlight} src2={icon} text={'Не знаете, с чего начать'} />
                <Block src1={Highlight} src2={icon} text={'Не знаете, с чего начать'} />
                <Block src1={Highlight} src2={icon} text={'Не знаете, с чего начать'} />
                <Block src1={Highlight} src2={icon} text={'Не знаете, с чего начать'} />
            </div>
        </div>
    )
}
