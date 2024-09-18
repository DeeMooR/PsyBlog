import React, { useState } from 'react'
import { ModalConfirm } from 'src/components';
import { deleteUserAction, getUsersSelector, useAppDispatch, useAppSelector } from 'src/store';
import { basketIcon } from 'src/assets';
import './UsersPageTableLines.css';

export const UsersPageTableLines = () => {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector(getUsersSelector);
  const [deleteUserId, setDeleteUserId] = useState<number | null>(null);

  const deleteUser = () => {
    if (deleteUserId) dispatch(deleteUserAction(deleteUserId));
    setDeleteUserId(null);
  }

  return (
    <div className='usersPageTableLines'>
      {users.map(user => (
        <div className="usersPageTableLines__line">
          <p className='name'>{user.name}</p>
          <p className='email'>{user.email}</p>
          <p className='phone'>{user.phone}</p>
          <p className='date'>25 января 2024 16:35</p>
          <img src={basketIcon} onClick={() => setDeleteUserId(user.id)} className='delete' alt="basket" />
        </div>
      ))}
      {deleteUserId && <ModalConfirm action='delete_user' clickApply={deleteUser} closeModal={() => setDeleteUserId(null)} />}
    </div>
  )
}