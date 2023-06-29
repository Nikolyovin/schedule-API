import EntryService from '../services/EntryService.js'

// в контроллерах только логика с req res
class EntryController {
  async create(req, res) {
    try {
      console.log('req.body', req.body)
      const entry = await EntryService.create(req.body)
      console.log('entry***', entry)

      res.json(entry)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async getAll(req, res) {
    try {
      const entry = await EntryService.getAll()
      res.json(entry)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  //получаем пост с помощью сервиса и возвращаем его на клиент
  async getOne(req, res) {
    try {
      const entry = await EntryService.getOne(req.params.id)

      return res.json(entry)
    } catch (e) {
      res.status(500).json(e.message) // e.message потому что мы ошибку создаем через throw new Error в Сервисах
    }
  }

  async update(req, res) {
    try {
      // console.log('req', req.params.id, req.body)
      const updatedEntry = await EntryService.update(req.params.id, req.body) //{new: true} чтобы вернулся обновленный пост
      console.log('updatedEntry****:', updatedEntry)

      return res.json(updatedEntry)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }

  async delete(req, res) {
    try {
      const entry = await EntryService.delete(req.params.id)

      return res.json(entry)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

export default new EntryController()
