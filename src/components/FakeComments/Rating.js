import { FaBeer } from "react-icons/fa"

const Rate = ({ beers=0 }) => {
  if (beers > 5 || beers < 0) return null
  const fills = Array(5).fill('#f28e1c', 0, beers).fill('#808080', beers)
  return (
    <>
      {fills.map(i => <FaBeer color={i} />)}
    </>
  )
}

export default Rate
