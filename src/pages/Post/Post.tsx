import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Footer, Header, Text, Title, TitleAndText, Image, TwoImages, Blockquote, List } from 'src/components'
import { IImage, IList, IBlockquote, ITwoImages, ITitle, IText, ITitleAndText } from 'src/components/newPost'
import { getFullPostAction, getNewPostDataSelector, setAllPostsErrorMessage, useAppDispatch, useAppSelector } from 'src/store'
import { post_1, post_2, post_3, humanIcon } from 'src/assets'
import { PostImage } from 'src/styled'
import './Post.css'

const obj1 = {
  text: 'Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don\'t plan and prepare adequately. In this blog article, we\'ll explore tips and tricks for a memorable journey and how to make the most of your travels.<br /><br />One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.'
};
const obj2 = {
  title: 'Traveling is an enriching experience'
};
const obj3 = {
  title: 'Research Your Destination',
  text: 'Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don\'t plan and prepare adequately. In this blog article, we\'ll explore tips and tricks for a memorable journey and how to make the most of your travels.<br /><br />One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.'
};

const obj4: IImage = {
  image: post_1,
  size: 'big',
  withBorder: true,
}
const obj5: IImage = {
  image: post_2,
  size: 'medium',
  withBorder: false,
}
const obj6: IImage = {
  image: post_3,
  size: 'small',
  withBorder: true,
}
const obj7: ITwoImages = {
  image1: post_1,
  image2: post_2,
}
const obj8: IBlockquote = {
  quote: 'Traveling can expose you to new environments and potential health risks, so it\'s crucial to take precautions to stay safe and healthy.'
}
const obj9: IList = {
  text: 'Что-то будет перечисляться:',
  type: 'pointer',
  items: [
    'Первый пункт',
    'Второй пункт. Много текста. Много текста. Много текста. Много текста. Много текста. Много текста. Много текста. Много текста. Много текста. Много текста',
    'Третий пункт. Переносы.<br />Переносы<br />Переносы'
  ]
}
const obj10: IList = {
  text: 'Что-то будет перечисляться:',
  type: 'number',
  items: [
    'Первый пункт',
    'Второй пункт. Много текста. Много текста. Много текста. Много текста. Много текста. Много текста. Много текста. Много текста. Много текста. Много текста',
    'Третий пункт. Переносы.<br />Переносы<br />Переносы'
  ]
}
const obj11 = {
  text: 'Конец)'
}

const showBlock = {
  'title': (obj: ITitle) => <Title obj={obj} />,
  'text': (obj: IText) => <Text obj={obj} />,
  'title_and_text': (obj: ITitleAndText) => <TitleAndText obj={obj} />,
  'quote': (obj: IBlockquote) => <Blockquote obj={obj} />,
  'list': (obj: ITitle) => <Title obj={obj} />,
};

export const Post = () => {
  const { id: param } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { title, image, date, blocks } = useAppSelector(getNewPostDataSelector);

  useEffect(() => {
    const func = async () => {
      try {
        if (param) await dispatch(getFullPostAction(+param)).unwrap();
      } catch {
        dispatch(setAllPostsErrorMessage('Ошибка при получении статьи'));
        navigate('/posts');
      }
    }
    func();
  }, [param])

  return (
    <div className='post'>
      <Header />
      <div className='post__wrapper'>
        <div className='post__crumbs'>
          <span className='crumbs' onClick={() => navigate('/')}>Главная /</span>
          <span className='crumbs' onClick={() => navigate('/posts')}> Все статьи</span>
        </div>
        <p className='post__title'>{title}</p>
        <div className="post__shortInfo">
          <div className="post__author">
            <img className='author__icon' src={humanIcon} />
            <p className="author__text">Ольга Разваляева</p>
          </div>
          <p className="post__date">{date}</p>
        </div>
        <div className="post__image">
          <PostImage image={image} />
          <div className="imageBorder" />
        </div>
        <div className="post__content">
          {blocks.map(({table_name, fields}) => 
            showBlock[table_name](fields as any)
          )}
          
          <Text obj={obj1} />
          <Title obj={obj2} />
          <TitleAndText obj={obj3} />
          <Image obj={obj4} />
          <Text obj={obj1} />
          <Image obj={obj5} />
          <Text obj={obj1} />
          <Image obj={obj6} />
          <Text obj={obj1} />
          <TwoImages obj={obj7} />
          <Text obj={obj1} />
          <Blockquote obj={obj8} />
          <List obj={obj9} />
          <List obj={obj10} />
          <Text obj={obj11} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
