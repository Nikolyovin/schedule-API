import express from 'express'
import mongoose from 'mongoose'
import fileUpload from 'express-fileupload'
import router from './routers/index.js'

const PORT = 5100

const DB_URL = 'mongodb://localhost:27017/schedule'

const app = express()

app.use(express.json()) //нужно тк express по дефолту не понимает json
app.use(express.static('static')) // нужно чтобы сервер мог отдавать статические файлы, например изображения
app.use(fileUpload({})) //подключаем миделвеер fileUpload для работы с файлами, мы будем с фото

app.use('/api', router)

async function startApp() {
  try {
    await mongoose.connect(DB_URL)
    app.listen(PORT, () => console.log('SERVER STARTED ON PORT' + PORT))
  } catch (e) {
    console.log(e)
  }
}

startApp()
