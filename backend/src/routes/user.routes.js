import { Router } from 'express'
import { getUser, createUser, updateUser, deleteUser } from '../controllers/user.controller.js'



const router = Router();


router.get('/user', getUser)
router.post('/user', createUser)
router.put('/user', updateUser)
router.delete('/user', deleteUser)

export default router;