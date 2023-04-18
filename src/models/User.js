import mongoose from 'mongoose'

const User = new mongoose.Schema({
    login: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    color: { type: String, required: true },
    picture: { type: String }
})

export default mongoose.model('User', User)
