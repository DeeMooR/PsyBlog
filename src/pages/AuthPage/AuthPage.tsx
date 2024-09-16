import React, { useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { clearAdminMessages, getAdminSelector, useAppDispatch, useAppSelector, checkAdminAction } from 'src/store'
import { Header, Footer, Notification, Input } from 'src/components';
import { authScheme } from 'src/validation';
import { IAuth } from 'src/interfaces';
import './AuthPage.css'

export const AuthPage = () => {
  // const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAdmin, errorMessage } = useAppSelector(getAdminSelector);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuth>({
    mode: 'onChange',
    resolver: yupResolver(authScheme)
  });

  useEffect(() => {
    // if (isAdmin) navigate('/admin');
    console.log(isAdmin)
  }, [isAdmin])

  const onSubmit = (data: IAuth) => {
    dispatch(checkAdminAction(data));
  }

  const clearMessages = () => {
    dispatch(clearAdminMessages());
  }

  return (
    <>
      <Header/>
      <section className="authPage">
        <h1 className='authPage__title'>Вход в админ-панель</h1>
        <form className="authPage__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="authPage__fields">
            <Input
              id='login'
              register={register}
              type="text"
              placeholder='Логин'
              error={errors.login?.message}
            />
            <Input
              id='password'
              register={register}
              type="password"
              placeholder='Пароль'
              error={errors.password?.message}
            />
          </div>
          <button type='submit' className='authPage__button'>Войти</button>
        </form>
      </section>
      <Footer/>
      {errorMessage && <Notification type='error' message={errorMessage} clearMessage={clearMessages} />}
    </>
  )
}
