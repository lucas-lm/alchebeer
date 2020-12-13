import styles from './Backdrop.module.css'

const Backdrop = ({ open, onClose }) => {
  const classes = `${styles.root} ${open? '' : styles.closed}`
  return <div className={classes} onClick={onClose}/> 
}

export default Backdrop
