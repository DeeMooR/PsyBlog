import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input, SectionTemplate, Textarea } from 'src/components'
import { contactsImage } from 'src/assets'
import { IOrderForm } from 'src/interfaces'
import { orderForm } from 'src/validation'
import { ContactsImage } from 'src/styled'
import './Contacts.css'

export const Contacts = () => {

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<IOrderForm>({
    mode: 'onSubmit',
    resolver: yupResolver(orderForm),
  });

  const onSubmit = (data: IOrderForm) => {
    console.log(data);
  }

  return (
    <section className='contacts'>
      <div className="contacts__wrapper">
        <div className="contacts__image">
          <ContactsImage image={contactsImage} />
        </div>
        <form className='contacts__form' onSubmit={handleSubmit(onSubmit)}>
          <div className="form__content">
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
            <button className='form__button' disabled={!isValid}>Записаться</button>
            <a href="#" className='form__policy'>Нажимая на кнопку, вы даете согласие на обработку персональных данных. </a>
          </div>
        </form>
      </div>
    </section>
  )
}
