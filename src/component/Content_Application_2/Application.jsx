import React from 'react'
import './Application.css'
import London from '../image/London.png'
import moon from '../image/moon.png'
import star from '../image/star.png'
import Button from '../additional_content/Button/Button'
import book from '../image/book.png'
import tags from '../image/tags.png'

export default function Application() {
    return (
        <div className='Application'>
            <div className='Application_main-block'>
                <img className='Application_main-block_London' src={London} alt="London" />
                <img className='Application_main-block_moon' src={moon} alt="moon" />
                <img className='Application_main-block_star1' src={star} alt="star" />
                <div className='Application_main-block_text'>
                    Экспресс-погружение в английский 14-16 мая
                </div>
                <div className='Application_main-block_button'>
                    <Button button={'Оставить заявку'} />
                    <Button button={'Подробнее'} />
                </div>
            </div>
            <div className='Application_blok1'>
                <img className='Application_blok1_book' src={book} alt="book" />
            </div>
            <div className='Application_blok2'>
                <img   className='Application_blok2_tags' src={tags} alt="tags" />
            </div>

        </div>
    )
}
