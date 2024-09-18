import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Footer, HeaderAdmin, Loading, Notification, UsersPageTableHeader, UsersPageTableLines, Wait } from 'src/components'
import { useAppSelector, getUsersSelector, useAppDispatch, clearUsersMessages, getUsersAction } from 'src/store'
import './UsersPage.css'

export const UsersPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { users, isLoading, successMessage, errorMessage } = useAppSelector(getUsersSelector);

  useEffect(() => {
    dispatch(getUsersAction());
  }, [])

  const clearMessages = () => dispatch(clearUsersMessages());
 
  return (
    <div className='usersPage'>
      <HeaderAdmin />
      <div className="usersPage__wrapper">
        <p className='crumbs' onClick={() => navigate('/')}>Главная /</p>
        <h2 className='usersPage__title'>Все заявки</h2>
        {isLoading ? <Loading isWrapperContent /> : 
          <div className="usersPage__table">
            <UsersPageTableHeader />
            {!!users.length ? (
              <UsersPageTableLines />
            ) : (
              <p className='usersPage__empty'>Заявок нет</p>
            )}
          </div>
        }
      </div>
      <Footer />
      {successMessage && <Notification type='success' message={successMessage} clearMessage={clearMessages} />}
      {errorMessage && <Notification type='error' message={errorMessage} clearMessage={clearMessages} />}
    </div>
  )
}

export default UsersPage
