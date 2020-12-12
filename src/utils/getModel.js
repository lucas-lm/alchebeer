import { model } from 'mongoose'

export default (name, schema) => {
  try {
    return model(name)
  } catch (error) {
    return model(name, schema)
  }
}
