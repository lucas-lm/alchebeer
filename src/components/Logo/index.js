import Link from 'next/link'
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <Link href='/'>
      <a>
        <div className={styles.root}>
          <span>ALCHE</span><br />
          <span>BEER</span>
        </div>
      </a>
    </Link>
  )
}

export default Logo
