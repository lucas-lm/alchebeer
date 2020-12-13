import { useState, useEffect } from 'react'
import styles from './IngredientCard.module.css'

const IngredientCard = ({ name, image, onSelect, onDeselect, id }) => {
  const [isSelected, setIsSelected] = useState(null)
  const handleClick = () => {
    setIsSelected(!isSelected)
  }

  useEffect(() => {
    if (isSelected !== null) {
      isSelected ? onSelect(id) : onDeselect(id)
    }
  }, [isSelected])

  const imageStyle = `${styles.image} ${isSelected ? styles['image-selected'] : ''}`
  const titleStyle = `${styles.title} ${isSelected ? styles['title-selected'] : ''}`

  return (
    <div className={styles.root} title={name} onClick={handleClick}>
      <img src={image} alt={name} className={imageStyle} />
      <h3 className={titleStyle}>{name}</h3>
    </div>
  )
}

export default IngredientCard
