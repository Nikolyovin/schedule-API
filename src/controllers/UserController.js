import UserService from '../services/UserService.js'

// в контроллерах только логика с req res
class UserController {
  async create(req, res) {
    try {
      // req.files.picture тут лежит фото которое мы отправляем
      console.log('req.files', req.files)
      const user = await UserService.create(req.body, req.files)
      res.json(user)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async getAll(req, res) {
    try {
      const user = await UserService.getAll()
      res.json(user)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  //получаем пост с помощью сервиса и возвращаем его на клиент
  async getOne(req, res) {
    try {
      const user = await UserService.getOne(req.params.id)
      return res.json(user)
    } catch (e) {
      res.status(500).json(e.message) // e.message потому что мы ошибку создаем через throw new Error в Сервисах
    }
  }

  async update(req, res) {
    try {
      const updatedUser = await UserService.update(req.body) //{new: true} чтобы вернулся обновленный пост
      return res.json(updatedUser)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }

  async delete(req, res) {
    try {
      const user = await UserService.delete(req.params.id)
      return res.json(user)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

export default new UserController()
