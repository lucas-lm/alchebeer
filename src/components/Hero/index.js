import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>alchebeer</h1>
      <img src='/ambev.png' className={styles.image}/>
      <p className={styles.text}>Aqui você irá descobrir e compartilhar novos drinks com as nossas bebidas!</p>
    </div>
  )
}

export default Hero
