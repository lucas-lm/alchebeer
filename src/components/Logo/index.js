import Link from 'next/link'
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <Link href='/'>
      <a>
        <div className={styles.root}>
          <span className={styles.first}>alche</span>
          <span className={styles.second}>beer</span>
        </div>
      </a>
    </Link>
  )
}

export default Logo
