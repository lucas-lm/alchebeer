import styles from './Title.module.css'

const classFor = size => `${styles.root} ${styles[size]}`

const Title = ({ size='regular', children, variant: Component ='p', ...rest }) => {
  return (
    <Component className={classFor(size)} {...rest}>{children}</Component>
  )
}

export default Title
