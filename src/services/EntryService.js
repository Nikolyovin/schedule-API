import Entry from '../models/Entry.js'

//сервис работает только с базой данных; от req res не зависим
class EntryService {
  async create(entry) {
    const createEntry = await Entry.create(entry)
    return createEntry
  }

  async getAll() {
    const entries = await Entry.find()
    return entries
  }

  async getOne(id) {
    if (!id) {
      throw new Error('не указан Id')
    }
    const entry = await Entry.findById(id)
    return entry
  }

  async update(entry) {
    if (!entry._id) {
      throw new Error('не указан Id')
    }
    const updatedEntry = await Entry.findByIdAndUpdate(entry._id, entry, {
      new: true,
    }) //{new: true} чтобы вернулся обновленный пост
    return updatedEntry
  }

  async delete(id) {
    if (!id) {
      throw new Error('не указан Id')
    }
    const entry = await Entry.findByIdAndDelete(id)
    return entry
  }
}

export default new EntryService()
