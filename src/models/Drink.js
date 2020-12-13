import { Schema } from 'mongoose'
import { getModel } from '../utils'

const DrinkSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    trim: true
  },
  ingredients: {
    type: Array,
    required: true
  },
  creator: {
    type: String,
    required: true
  }
})

const Drink = getModel('Drink', DrinkSchema)

export default Drink
