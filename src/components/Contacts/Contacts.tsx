import React from 'react'
import { SectionTemplate } from 'src/components'
import './Contacts.css'
import { InstagramIcon, TelegramIcon } from 'src/assets'

export const Contacts = () => {
  return (
    <SectionTemplate backgroundColor='grey' >
      <div className='contacts'>
        <div className="contacts__info">
          <h4>Психоаналитик</h4>
          <h3>Ольга Разваляева</h3>
          <div className="contacts__icons">
            <div className="contacts__icon">
              <TelegramIcon className='icon__image' />
              <p className='icon__text'>@username</p>
            </div>
            <div className="contacts__icon">
              <InstagramIcon className='icon__image' />
              <p className='icon__text'>@username</p>
            </div>
          </div>
        </div>
        <form className='contacts__form'>
          <h3 className='form__title'>Записаться на консультацию</h3>
          <p className='form__subtitle'>Вы можете задать любой вопрос о психотерапии или записаться на консультацию. Это конфиденциально.</p>
          <div className="form__inputs">
            <input type="text" placeholder='Имя' />
            <input type="email" placeholder='Почта' />
            <input type="text" placeholder='Вопрос' />
          </div>
          <button className='form__button btnBlack'>Записаться</button>
          <a href="#" className='form__policy'>Нажимая кнопку, вы даете согласие на обработку персональных данных. </a>
        </form>
      </div>
    </SectionTemplate>
  )
}
