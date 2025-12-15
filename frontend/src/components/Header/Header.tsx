import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { displayScroll, hiddenScroll, scrollToSection } from 'src/helpers';
import { SlideBar } from 'src/components';
import { menuIcon } from 'src/assets';
import cls from './Header.module.css'

export const Header = () => {
  const navigate = useNavigate();
  const [clickMenu, setClickMenu] = useState(false);

  useEffect(() => {
    if (clickMenu) hiddenScroll()
    else displayScroll()
  }, [clickMenu]);

  const onClickLogo = () => {
    scrollToSection('up', navigate, -80);
  }
  const scroll = (section: string) => {
    scrollToSection(section, navigate)
  }

  return (
    <header className={cls.header}>
      <div className={cls.header__wrapper}>
        <div className={cls.navigation}>
          <a onClick={() => scroll('about')}>Обо мне</a>
          <a onClick={() => scroll('consultation')}>Формат терапии</a>
        </div>
        <div className={`${cls.logo} logo__block`} onClick={onClickLogo}>
          <p className='logo__name'>Ольга Разваляева</p>
          <p className='logo__position'>Психолог</p>
        </div>
        <div className={cls.navigation}>
          <a onClick={() => scroll('qualification')}>Образование</a>
          {/* <a onClick={() => scroll('blog')} >Статьи</a> */}
          <a onClick={() => scroll('contacts')}>Контакты</a>
        </div>
        <div className={cls.menu} onClick={() => setClickMenu(true)}>
          <img src={menuIcon} alt="menu" />
        </div>
      </div>
      <SlideBar clickMenu={clickMenu} setClickMenu={setClickMenu} />
    </header>
  )
}
