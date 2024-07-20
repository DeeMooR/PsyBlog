import React from 'react'
import { Footer, Header } from 'src/components'
import { card_1, card_2, card_3, card_4, card_5, card_6, humanIcon } from 'src/assets'
import { PostImage } from 'src/styled'
import './Post.css'

export const Post = () => {
  return (
    <div className='post'>
      <Header />
      <div className='post__wrapper'>
        <p className='post__title'>Что такое психология и с чем её едят?</p>
        <div className="post__shortInfo">
          <div className="post__author">
            <img className='author__icon' src={humanIcon} />
            <p className="author__text">Ольга Разваляева</p>
          </div>
          <p className="post__date">3 января 2024г.</p>
        </div>
        <div className="post__image">
          <PostImage image={card_1} />
          <div className="imageBorder" />
        </div>
        <div className="post__content">
          <p className="text">
            Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.
            <br /><br />
            One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.
          </p>
          <p className="title">Traveling is an enriching experience</p>
          <div className="textWithTitle">
            <p className="title">Research Your Destination</p>
            <p className="text">
              Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.
              <br /><br />
              One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.
            </p>
          </div>
          <div className="image big">
            <img src={card_2} />
            <div className="imageBorder" />
          </div>
          <p className="text">
            Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.
          </p>
          <div className="image medium">
            <img src={card_3} />
          </div>
          <p className="text">
            Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.
          </p>
          <div className="image small">
            <img src={card_4} />
            <div className="imageBorder" />
          </div>
          <p className="text">
            Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.
          </p>
          <div className="twoImage">
            <img src={card_5} />
            <img src={card_6} />
          </div>
          <p className="text">
            Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.
          </p>
          <div className="list">
            <p className='text'>Что-то будет перечисляться:</p>
            <ul>
              <li>Первый пункт</li>
              <li>Второй пункт. Много текста. Много текста. Много текста. Много текста. Много текста. Много текста. Много текста. Много текста. Много текста. Много текста</li>
              <li>Третий пункт. Переносы.<br />Переносы<br />Переносы</li>
            </ul>
          </div>
          <div className="list">
            <p className='text'>Что-то будет перечисляться:</p>
            <ol>
              <li>Первый пункт</li>
              <li>Второй пункт. Много текста. Много текста. Много текста. Много текста. Много текста. Много текста. Много текста. Много текста. Много текста. Много текста</li>
              <li>Третий пункт. Переносы.<br />Переносы<br />Переносы</li>
            </ol>
          </div>
          <blockquote className='quote'>
            Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy.
          </blockquote>
          <p className='text'>{`Конец)`}</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
