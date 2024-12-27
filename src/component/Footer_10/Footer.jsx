import React from 'react'
import './Footer.css'
import logo from '../image/Logo.png'
import number from '../image/Иконка (2).png'
import mail from '../image/Иконка (3).png'

import telegram from '../image/Telegram - Negative.png'
import instagram from '../image/Иконка Instagram.png'
import facebook from '../image/Иконка Facebook.png'


export default function Footer() {
    return (
        <div className='Footer'>
            <div className='Footer_mainLogo'>
                <div>
                    <img className='Footer_logo' src={logo} alt="Logo" />
                </div>
                <div className='Footer_text'>
                    <div className='Footer_number'>
                        <img src={number} alt=" Иконка" />
                        <a href="аа">+46 (8) 4468-86-76</a>
                    </div>
                    <div className='Footer_mail'>
                        <img src={mail} alt=" Иконка" />
                        <a href="аа">student@churchill-school.com</a>
                    </div>
                </div>
                <div className='Footer_socialNetworks'>
                    <a href="aa"> <img className='Footer_telegram' src={telegram} alt=" Иконка" /></a>
                    <a href="a">   <img className='Footer_instagram f1 ' src={instagram} alt=" Иконка" /></a>
                    <a href="a">      <img className='Footer_facebook f1' src={facebook} alt=" Иконка" /></a>
                </div>
            </div>
            <div className='footer_text5'>
                <div className='footer_text4'>
                    <h1>2024©️Все права защищены</h1>
                    <p>Копирование любых частей сайта без разрешения владельцев запрещено.</p>
                </div>
                <div className='footer_text6' >
                    <p>Договор оферты</p>
                    <p>Копирование любых частей сайта без разрешения владельцев запрещено.</p>
                    <p>Политика конфиденциальности</p>
                </div>
            </div>
        </div>
    )
}
