import React from 'react'
import './ExpressDive.css'
import Arrow from '../image/Arrow 2.png'
import img1 from '../image/Фото (1).png'

export default function ExpressDive() {
    return (
        <div className='ExpressDive'>
            <div className='ExpressDive_text'>
                <div className='ExpressDive_text1 hh1'>
                    <p>Поставите себе правильное произношение</p>
                </div>
                <div className='ExpressDive_text2 hh1 '>
                    <p>Научитесь запоминать более 100 новых английских слов в день</p>
                </div>
                <div className='ExpressDive_text3 hh1 '>
                    <p>Узнаете лайфхаки изучения языка, чтобы быстрее овладеть им </p>
                </div>
            </div>
            <div className='ExpressDive_MainBlock'>
                <div className='ExpressDive_Block_1'>
                    <div className='ExpressDive_Block_1_text'>
                        <h1>Экспресс-погружение в английский язык</h1>
                        <img src={Arrow} alt="Arrow" />
                    </div>
                    <div className='ExpressDive_Block_1_input'>
                        <input className='input1' type="text" placeholder="Ваше имя" />
                        <input className='input1' type="text" placeholder="Ваш номер телефона" />
                        <input className='input1' type="text" placeholder="Ваша электронная почта" />
                    </div>
                    <div className='ExpressDive_Block_1_link'>
                        <p>Нажимая на кнопку "Оставить заявку", вы соглашаетесь c политикой конфиденциальности и обработкой персональных данных</p>
                    </div>
                    <button className='ExpressDive_Block_1_button'>Оставить заявку</button>
                </div>
                <div className='ExpressDive_Block_2'>
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>

    )
}
