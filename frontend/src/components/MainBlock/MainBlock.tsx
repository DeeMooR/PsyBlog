import cls from './MainBlock.module.css'

export const MainBlock = () => {
  return (
    <section className={cls.container} id='up'>
      <div className={cls.content}>
        <h1 className={cls.title}>Русскоязычный психолог.</h1>
        <h2 className={cls.text}>Индивидуальные онлайн-консультации для взрослых</h2>
      </div>
    </section>
  )
}
