import Drink from '../../../models/Drink'
import dbConnect from '../../../utils/dbConnect'

dbConnect()

export default async (req, res) => {
  const { method } = req
  switch (method) {
    case 'GET': {
      const drinks = await Drink.find()
      return res.json(drinks)
    }
      
    case 'POST': {
      const { body: { name, creator, ingredients } } = req
      const drink = await Drink.create({name, creator, ingredients})
      console.log(drink)
      return res.json(drink)
    }
  
    default:
      return res.send('Something went wrong...')
  }
}
