import React from 'react'
import './Header.css'
import Logo from '../image/Logo.png'
import Button from '../additional_content/Button/Button'
import Link from '../additional_content/Syley/Link'

export default function Header() {
    return (
        <div className='header'>
            <div>
                <img className='header_logo' src={Logo} alt="Logo" />
            </div>
            <div className='header_menu'>
                <Link a="Главная" href="#Home" />
                <Link a={"Программа"} href="#Home" />
                <Link a="Ведущий" href="#Home" />
                <Link a="Ответы на частые вопросы" href="#Home" />
            </div>
            <div>
                <Button button="Связаться с нами" />
            </div>
        </div>
    )
}
