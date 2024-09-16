import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from 'src/components'
import { contactsImage } from 'src/assets'
import { IUser } from 'src/interfaces'
import { orderScheme } from 'src/validation'
import { ContactsImage } from 'src/styled'
import './Contacts.css'
import { createUserAction, useAppDispatch } from 'src/store'

export const Contacts = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    mode: 'onSubmit',
    resolver: yupResolver(orderScheme),
  });

  const onSubmit = (data: IUser) => {
    dispatch(createUserAction(data));
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
                error={errors.name?.message}
              />
              <Input
                id='email' 
                register={register}
                type="text" 
                placeholder='Почта' 
                error={errors.email?.message}
              />
              <Input
                id='phone' 
                register={register}
                type="phone" 
                placeholder='Телефон' 
                error={errors.phone?.message}
              />
            </div>
            <button className='form__button'>Записаться</button>
            <a href="#" className='form__policy'>Нажимая на кнопку, вы даете согласие на обработку персональных данных. </a>
          </div>
        </form>
      </div>
    </section>
  )
}
