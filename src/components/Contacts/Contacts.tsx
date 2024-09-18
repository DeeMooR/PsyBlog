import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { createUserAction, useAppDispatch } from 'src/store'
import { Input } from 'src/components'
import { contactsImage } from 'src/assets'
import { IUserForm } from 'src/interfaces'
import { orderScheme } from 'src/validation'
import { ContactsImage } from 'src/styled'
import './Contacts.css'

export const Contacts = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUserForm>({
    mode: 'onSubmit',
    resolver: yupResolver(orderScheme),
  });

  const onSubmit = (data: IUserForm) => {
    try {
      dispatch(createUserAction(data)).unwrap();
      reset();
    } catch {}
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
