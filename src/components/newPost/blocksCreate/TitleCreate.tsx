import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form';
import { BlockCreateTemplate, Input } from 'src/components';
import { IBlockquote, ITitle } from '../interfaces';
import { useAppSelector, getNewPostDataSelector } from 'src/store';
import cn from 'classnames';
import './Create.css';

interface ITitleCreate {
  obj?: ITitle | IBlockquote
}

export const TitleCreate:FC<ITitleCreate> = ({obj}) => {
  const { id: post_id } = useAppSelector(getNewPostDataSelector);
  const [change, setChange] = useState(false);
  const block_id = '2';

  const btnStyle = cn('smallBtn', {
    btnCancel: change
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITitle>({
    mode: 'onSubmit',
    // resolver: yupResolver(orderForm),
  });

  const onSubmit = (data: ITitle) => {
    const obj = {
      post_id,
      table: 'title',
      fields: data
    }
    console.log(obj);
  }

  return (
    <BlockCreateTemplate>
      <form className="titleCreate newBlock" onSubmit={handleSubmit(onSubmit)}>
        <div className="newBlock__fields">
          <Input 
            id='title' 
            register={register}
            type="text" 
            placeholder='Заголовок'
            disabled={!change}
            error={errors.title?.message}
          />
        </div>
        <div className="newBlock__buttons">
          {block_id && <button type='button' className={btnStyle} onClick={() => setChange(!change)}>{change ? 'Отменить' : 'Изменить'}</button>}
          {!block_id || change && <button className='smallBtn'>Сохранить</button>}
        </div>
      </form>
    </BlockCreateTemplate>
   
  )
}
