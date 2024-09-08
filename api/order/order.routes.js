import express from 'express'

import { requireAuth } from '../../middlewares/requireAuth.middleware.js'
import { log } from '../../middlewares/logger.middleware.js'

import { getOrders, getOrderById, addOrder, updateOrder, removeOrder } from './order.controller.js'

const router = express.Router()

// We can add a middleware for the entire router:
// router.use(requireAuth)

router.get('/', log, getOrders)
// router.get('/:id', log, getOrderById)
// router.post('/', log, addOrder)
router.post('/', log, requireAuth, addOrder)
router.put('/:id', requireAuth, updateOrder)

// router.delete('/:id', requireAuth, requireAdmin, removeOrder)



export const orderRoutes = router