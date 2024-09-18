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
      {users.map(({id, date, email, name, phone}) => (
        <div className="usersPageTableLines__line">
          <p className='name'>{name}</p>
          <p className='email'>{email}</p>
          <p className='phone'>{phone}</p>
          <p className='date'>{date}</p>
          <img src={basketIcon} onClick={() => setDeleteUserId(id)} className='delete' alt="basket" />
        </div>
      ))}
      {deleteUserId && <ModalConfirm action='delete_user' clickApply={deleteUser} closeModal={() => setDeleteUserId(null)} />}
    </div>
  )
}