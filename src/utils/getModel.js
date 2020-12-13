import { model } from 'mongoose'

const getModel = (name, schema) => {
  try {
    return model(name)
  } catch (error) {
    return model(name, schema)
  }
}

export default getModel
