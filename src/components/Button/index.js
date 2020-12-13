import Link from 'next/link'
import styles from './Button.module.css'

const Button = ({ children, to, variant='link', ...rest }) => {
  switch (variant) {
    case 'link':
      return (
        <Link href={to}>
          <a><button className={styles.root}>{children}</button></a>
        </Link>
      )

    case 'action':
      return (
          <button className={styles.root} {...rest}>{children}</button>
      )
  
    default:
      throw new Error('Invalid variant of button')
  }
}

export default Button