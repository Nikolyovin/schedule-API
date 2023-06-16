import User from '../models/User.js'
import FileService from './FileService.js'

//сервис работает только с базой данных; от req res не зависим
class UserService {
  async create(user, files) {
    // console.log('user', user)
    // console.log('files', files)
    const picture = FileService.savePicture(files) // записываем на диск и сохраняем имя в бд
    const createUser = await User.create({ ...user, picture })
    console.log('createUser', createUser)
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

  async update(id, user, files) {
    if (!id) {
      throw new Error('не указан Id')
    }

    const updatedUser = await User.findByIdAndUpdate(id, user, {
      new: true,
    }) //{new: true} чтобы вернулся обновленный пост
    return updatedUser

    // const picture = FileService.savePicture(files)
    // const updatedUser = await User.findByIdAndUpdate(
    //   id,
    //   { ...user, picture },
    //   {
    //     new: true,
    //   }
    // ) //{new: true} чтобы вернулся обновленный пост
    // console.log('updatedUser', updatedUser)
    // return updatedUser
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
