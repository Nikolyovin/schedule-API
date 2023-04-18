import { Router } from 'express'
import UserController from '../controllers/UserController.js'

const router = new Router()

router.post('/users', UserController.create)
router.get('/users', UserController.getAll)
router.get('/users/:id', UserController.getOne)
router.put('/users', UserController.update)
router.delete('/users/:id', UserController.delete)

// router.get('/', UserController.getTest)

export default router
