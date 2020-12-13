import Link from 'next/link'
import styles from './RecipeCard.module.css'

const RecipeCard = ({ title, description, image, creator, link }) => {
  return (
    <div className={styles.root}>
      <img src={image} className={styles.picture} />
      <div className={styles['info-box']}>
        {creator && <small className={styles.creator}>Criado por: {creator}</small>}
        <h4 className={styles.title}>{title}</h4>
        {description && <p className={styles.description}>{description}</p>}
        {link && <Link href={link}>
          <a className={styles.link}>Ver mais</a>
        </Link>}
      </div>
    </div>
  )
}

export default RecipeCard
