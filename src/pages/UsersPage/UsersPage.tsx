import React, { useEffect } from 'react'
import { Footer, HeaderAdmin, Notification, UsersPageTableHeader, UsersPageTableLines } from 'src/components'
import { useAppSelector, getUsersSelector, useAppDispatch, clearUsersMessages, getUsersAction } from 'src/store'
import './UsersPage.css'

export const UsersPage = () => {
  const dispatch = useAppDispatch();
  const { users, successMessage, errorMessage } = useAppSelector(getUsersSelector);

  useEffect(() => {
    dispatch(getUsersAction());
  }, [])

  const clearMessages = () => dispatch(clearUsersMessages());
 
  return (
    <div className='usersPage'>
      <HeaderAdmin />
      <div className="usersPage__wrapper">
        <h2 className='usersPage__title'>Все заявки</h2>
        <div className="usersPage__table">
          <UsersPageTableHeader />
          {!!users.length ? (
            <UsersPageTableLines />
          ) : (
            <p className='usersPage__empty'>Заявок нет</p>
          )}
        </div>
      </div>
      <Footer />
      {successMessage && <Notification type='success' message={successMessage} clearMessage={clearMessages} />}
      {errorMessage && <Notification type='error' message={errorMessage} clearMessage={clearMessages} />}
    </div>
  )
}

export default UsersPage
