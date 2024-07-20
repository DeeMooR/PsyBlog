import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input, SectionTemplate, Textarea } from 'src/components'
import { whatsappIcon, telegramIcon } from 'src/assets'
import { IOrderForm } from 'src/interfaces'
import { schema } from './config'
import './Contacts.css'

export const Contacts = () => {

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<IOrderForm>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IOrderForm) => {
    console.log(data);
  }

  return (
    <SectionTemplate title='Контакты' backgroundColor='white' id='contacts' >
      <div className='contacts'>
        <div className="contacts__info">
          <h5>Психоаналитик</h5>
          <h3>Ольга Разваляева</h3>
          <div className="contacts__icons">
            <div className="contacts__icon">
              <img className='icon__image' src={telegramIcon} />
              <p className='icon__text'>@username</p>
            </div>
            <div className="contacts__icon">
              <img className='icon__image' src={whatsappIcon} />
              <p className='icon__text'>@username</p>
            </div>
          </div>
        </div>
        <form className='contacts__form' onSubmit={handleSubmit(onSubmit)}>
          <h4 className='form__title'>Записаться на консультацию</h4>
          <div className="form__inputs">
            <Input 
              id='name' 
              register={register}
              type="text" 
              placeholder='Ваше имя' 
            />
            <Input 
              id='email' 
              register={register}
              type="email" 
              placeholder='Почта' 
            />
            <Textarea 
              id='question' 
              register={register}
              placeholder='Вопрос' 
            />
          </div>
          <button type='submit' className='form__button btnBlack' disabled={!isValid}>Записаться</button>
          <a href="#" className='form__policy'>Нажимая на кнопку, вы даете согласие на обработку<br/>персональных данных. </a>
        </form>
      </div>
    </SectionTemplate>
  )
}
