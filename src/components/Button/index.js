import Link from 'next/link'
import styles from './Button.module.css'

const Button = ({ children, to }) => {
  return (
    <Link href={to}>
      <a><button className={styles.root}>{children}</button></a>
    </Link>
    
  )
}

export default Button