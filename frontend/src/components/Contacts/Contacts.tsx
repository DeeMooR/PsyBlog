import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { createUserAction, getMainSelector, useAppDispatch, useAppSelector } from 'src/store'
import { Input, Loading } from 'src/UI'
import { contactsImage } from 'src/assets'
import { IUserForm } from 'src/interfaces'
import { orderScheme } from 'src/validation'
import { trackEvent } from 'src/helpers'
import { ContactsImage } from 'src/styled'
import cls from './Contacts.module.css'

export const Contacts = () => {
  const dispatch = useAppDispatch();
  const { loadingRegister } = useAppSelector(getMainSelector);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUserForm>({
    mode: 'onSubmit',
    resolver: yupResolver(orderScheme),
  });

  const onSubmit = async (data: IUserForm) => {
    try {
      await dispatch(createUserAction(data)).unwrap();
      trackEvent('generate_lead', { method: 'contact_form' });
      reset();
    } catch {}
  }

  return (
    <section className={cls.container} id='contacts'>
      <div className={cls.content}>
        <div className={cls.image} role="img" aria-label="Запись на консультацию к психологу Ольге Разваляевой">
          <ContactsImage image={contactsImage} />
        </div>
        <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={cls.form__content}>
            <h2 className={cls.form__title}>Записаться на консультацию</h2>
            {loadingRegister ? (
              <div className={cls.form__loading}>
                <Loading />
              </div>
            ) : (
              <>
              <div className={cls.form__inputs}>
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
              <button className={cls.form__button}>Записаться</button>
              <p className={cls.form__policy}>Нажимая на кнопку, вы даете согласие на обработку персональных данных. </p>
              </>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
