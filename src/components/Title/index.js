import styles from './Title.module.css'

const classFor = size => `${styles.root} ${styles[size]}`

const Title = ({ size='regular', children, variant: Component ='h1', ...rest }) => {
  return (
    <Component className={classFor(size)} {...rest}>{children}</Component>
  )
}

export default Title
