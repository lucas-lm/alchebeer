import Drink from '../../../models/Drink'
import dbConnect from '../../../utils/dbConnect'

dbConnect()

export default async (req, res) => {
  const { method, query: { id } } = req
  console.log(id)
  switch (method) {
    case 'GET': {
      const drink = await Drink.findById(id)
      return res.json(drink)
    }
  
    default:
      return res.send('Something went wrong...')
  }
}
