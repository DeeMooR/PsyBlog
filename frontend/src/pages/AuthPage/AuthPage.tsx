import React, { useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { getAdminSelector, useAppDispatch, useAppSelector, loginAction } from 'src/store'
import { Header, Footer } from 'src/components';
import { Loading, Input } from 'src/UI'
import { authScheme } from 'src/validation';
import { IAuth } from 'src/interfaces';
import './AuthPage.scss'

export const AuthPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAdmin, isLoading } = useAppSelector(getAdminSelector);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuth>({
    mode: 'onChange',
    resolver: yupResolver(authScheme)
  });

  useEffect(() => {
    if (isAdmin) navigate('/');
  }, [isAdmin])

  const onSubmit = (data: IAuth) => {
    dispatch(loginAction(data));
  }

  return (
    <>
      <Header/>
      <section className="authPage">
        <div className="authPage__wrapper">
          <p className='crumbs' onClick={() => navigate('/')}>Главная /</p>
          <div className="authPage__content">
            <h1 className='authPage__title'>Вход в админ-панель</h1>
            {isLoading ? (
              <div className="authPage__loading">
                <Loading />
              </div>
            ) : (
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
            )}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}
