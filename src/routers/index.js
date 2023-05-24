import { Router } from 'express'
import UserController from '../controllers/UserController.js'
import EntryController from '../controllers/EntryController.js'

const router = new Router()

router.post('/users', UserController.create)
router.get('/users', UserController.getAll)
router.get('/users/:id', UserController.getOne)
router.put('/users', UserController.update)
router.delete('/users/:id', UserController.delete)

router.post('/entries', EntryController.create)
router.get('/entries', EntryController.getAll)
router.get('/entries/:id', EntryController.getOne)
router.put('/entries', EntryController.update)
router.delete('/entries/:id', EntryController.delete)

// router.get('/', UserController.getTest)

export default router
