import mongoose from 'mongoose'

let isConnected = 0

async function dbConnect() {
  if (isConnected) {
    return
  }

  const db = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })

  isConnected = db.connections[0].readyState
}

export default dbConnect
