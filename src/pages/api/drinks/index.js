import Drink from '../../../models/Drink'
import dbConnect from '../../../utils/dbConnect'

dbConnect()

export default async (req, res) => {
  const { method } = req
  if (method === 'GET') {
    const drinks = await Drink.find()
    return res.json(drinks)
  }
}
