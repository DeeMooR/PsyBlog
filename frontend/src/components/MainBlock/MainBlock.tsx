import cls from './MainBlock.module.css'

export const MainBlock = () => {
  return (
    <section className={cls.container} id='up'>
      <div className={cls.content}>
        <h1 className={cls.title}>Русскоязычный психолог онлайн.</h1>
        <h2 className={cls.text}>Психоаналитическое консультирование онлайн. <br/>Психологическая помощь эмигрантам</h2>
      </div>
    </section>
  )
}
