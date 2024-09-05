import express from 'express'

import { login, signup, logout, createUsers } from './auth.controller.js'

const router = express.Router()

router.post('/login', login)
router.post('/signup', signup)
router.post('/logout', logout)
router.post('/createusers', createUsers)

export const authRoutes = router