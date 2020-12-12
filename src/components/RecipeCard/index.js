import styles from './RecipeCard.module.css'

const RecipeCard = ({ title, description, image }) => {
  return (
    <div className={styles.root}>
      <img src={image} className={styles.picture} />
      <div className={styles['info-box']}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default RecipeCard
