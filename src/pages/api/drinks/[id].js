import Drink from '../../../models/Drink'
import dbConnect from '../../../utils/dbConnect'
import ings from '../../../data/ingredients.json'

dbConnect()

export default async (req, res) => {
  const { method, query: { id } } = req
  switch (method) {
    case 'GET': {
      const drink = await Drink.findById(id)
      const { items } = ings
      const ingredients = items.filter(item => drink.ingredients.includes(item.id))
      return res.json({...(drink.toJSON()), ingredients})
    }
  
    default:
      return res.send('Something went wrong...')
  }
}
