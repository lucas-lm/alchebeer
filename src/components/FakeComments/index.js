import styles from './FakeComments.module.css'
import Avatar from '../Avatar'
import Title from '../Title'
import Rating from './Rating'

const FakeComments = () => {
  return (
    <section>
      <Title variant='h4' size='small'>Comentários</Title>
      <div>
        <div className={styles.comment}>
          <Avatar src='https://randomuser.me/api/portraits/women/33.jpg'/>
          <div className={styles['comment-box']}>
          {/* <span style={{display: 'block'}}>🍻🍻🍻🍻🍻</span> */}
          <span style={{display: 'block'}}><Rating beers={5} /></span>
            <span className={styles.name}>Ana</span>
            <p>Muito bom! Fiz aqui em casa e todo mundo adorou!</p>
          </div>
        </div>
        <div className={styles.comment}>
          <Avatar src='https://randomuser.me/api/portraits/women/32.jpg'/>
          <div className={styles['comment-box']}>
            {/* <span style={{display: 'block'}}>🍻🍻</span> */}
            <span style={{display: 'block'}}><Rating beers={2} /></span>
            <span className={styles.name}>Gabriela</span>
            <p>Achei meio enjoativo...</p>
          </div>
        </div>
        <div className={styles.comment}>
          <Avatar src='https://randomuser.me/api/portraits/men/32.jpg'/>
          <div className={styles['comment-box']}>
          {/* <span style={{display: 'block'}}>🍻🍻🍻🍻🍺</span> */}
          <span style={{display: 'block'}}><Rating beers={4} /></span>
            <span className={styles.name}>Amadeu</span>
            <p>É super fácil de fazer</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FakeComments
