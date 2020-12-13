import data from '../../../data/ingredients.json'

export default (_req, res) => {
  res.statusCode = 200
  res.json(data)
}
