import mongoose from 'mongoose'

const Entry = new mongoose.Schema({
  master: { type: String, required: true },
  clientName: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: Date, required: true },
  duration: { type: Number, required: true },
  description: { type: String, required: true },
  wherefrom: { type: String, required: true },
})

export default mongoose.model('Entry', Entry)
