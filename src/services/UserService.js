import User from '../models/User.js'
import FileService from './FileService.js'

//сервис работает только с базой данных; от req res не зависим
class UserService {
  async create(user, files) {
    const picture = FileService.savePicture(files.picture) // записываем на диск и сохраняем имя в бд
    const createUser = await User.create({ ...user, picture })
    return createUser
  }

  async getAll() {
    const users = await User.find()
    return users
  }

  async getOne(id) {
    if (!id) {
      throw new Error('не указан Id')
    }
    const user = await User.findById(id)
    return user
  }

  async update(user) {
    if (!user._id) {
      throw new Error('не указан Id')
    }
    const updatedUser = await User.findByIdAndUpdate(user._id, user, {
      new: true,
    }) //{new: true} чтобы вернулся обновленный пост
    return updatedUser
  }

  async delete(id) {
    if (!id) {
      throw new Error('не указан Id')
    }
    const user = await User.findByIdAndDelete(id)
    return user
  }
}

export default new UserService()
