import React, { useState } from 'react'
import { Header, NewPostRequired, NewPostSelection, TitleCreate } from 'src/components'
import { getNewPostSelector, useAppSelector } from 'src/store'
import { NewBlockNames } from 'src/config'
import './NewPost.css'

const openNewBlock = {
  'Заголовок': <TitleCreate />,
};

export const NewPost = () => {
  const { newBlockName } = useAppSelector(getNewPostSelector);
  const [showSelection, setShowSelection] = useState(false);

  return (
    <div className='newPost'>
      <Header />
      <div className='newPost__wrapper'>
        <h2 className='newPost__title'>Создание поста</h2>
        <div className='newPost__required'>
          <NewPostRequired />
        </div>
        {newBlockName &&
          <div className='newPost__newBlock'>
            {openNewBlock[newBlockName as NewBlockNames]}
          </div>
        }
        {!showSelection &&
          <div className='newPost__addBlock'>
            <div className="addBlock__line"></div>
            <div className="addBlock__plus" onClick={() => setShowSelection(true)}>+</div>
            <div className="addBlock__line"></div>
          </div>
        }
        {showSelection &&
          <div className='newPost__selection'>
            <NewPostSelection clickClose={() => setShowSelection(false)} />
          </div>
        }
      </div>
    </div>
  )
}
