import Link from 'next/link'

const Navlink = ({ children, to, ...rest }) => {
  return (
    <li {...rest}>
      <Link href={to}>
        <a>{children}</a>
      </Link>
    </li>
  )
}

export default Navlink
