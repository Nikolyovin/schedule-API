import UserService from '../services/UserService.js'

// в контроллерах только логика с req res
class UserController {
  async create(req, res) {
    try {
      // req.files.picture тут лежит фото которое мы отправляем
      console.log('req.files', req.files)
      const user = (await req.files)
        ? UserService.create(req.body, req.files.picture)
        : UserService.create(req.body)
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
      console.log('req.files', req.files)
      console.log('req.params.id', req.params.id)
      console.log('req.body', req.body)
      // const updatedUser = await UserService.update(req.params.id, req.body)
      const updatedUser = req.files
        ? await UserService.update(req.params.id, req.body, req.files.picture)
        : await UserService.update(req.params.id, req.body)
      console.log('updatedUser:', updatedUser)
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
