import Link from 'next/link'

const Navlink = ({ children, to }) => {
  return (
    <li>
      <Link href={to}>
        <a>{children}</a>
      </Link>
    </li>
  )
}

export default Navlink
