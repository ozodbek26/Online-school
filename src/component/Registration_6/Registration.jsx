import React from 'react'
import './Registration.css'
import img from '../image/Стоимость.png'
import Button from '../additional_content/Button/Button'
import A from '../additional_content/Syley/Link'
import Big from '../image/Фото бигбен.png'
import flag from '../image/Фото флаг.png'

export default function Registration() {
    return (
        <div className='Registration'>
            <div className='Registration_form'>
            <img className='input_big' src={Big} alt="Big_Ben" />
            <img className='input_flag' src={flag} alt="flag" />
                <div className='Registration_form_text'>
                    <h1>3 дня полноценного погружения в английский</h1>
                    <img className='Registration_form_img' src={img} alt="img" />
                </div>
                <div className='Registration_form_input'>
                    <div>
                        <input className='input' type="text" placeholder="Ваше имя" />
                    </div>
                    <div>
                        <input className='input' type="text" placeholder="Ваш номер телефона" />
                    </div>
                    <div>
                        <input className='input' type="text" placeholder="Ваша электронная почта" />
                    </div>
                    <Button button={'Оставить заявку'} />
                </div>
                <div className='f1'>
                    <p className='f1_text'>Нажимая на кнопку "Оставить заявку", вы соглашаетесь </p>
                    <A A="политикой конфиденциальности и обработкой персональных данных " href="" />
                </div>
            </div>
        </div>
    )
}
