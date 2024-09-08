import { ObjectId } from 'mongodb'

import { logger } from '../../services/logger.service.js'
import { makeId } from '../../services/util.service.js'
import { dbService } from '../../services/db.service.js'
import { asyncLocalStorage } from '../../services/als.service.js'

const PAGE_SIZE = 3

export const orderService = {
	query,
	add,
	update
}

async function query(filterBy = { txt: '' }) {

	try {
		const criteria = _buildCriteria(filterBy)
		const sort = _buildSort(filterBy)

		const collection = await dbService.getCollection('order')



		var orderCursor = await collection.find(criteria)

		// var orderCursor = await collection.find(criteria, { sort })

		// if (filterBy.pageIdx !== undefined) {
		// 	orderCursor.skip(filterBy.pageIdx * PAGE_SIZE).limit(PAGE_SIZE)
		// }

		const orders = orderCursor.toArray()

		return orders
	} catch (err) {
		logger.error('cannot find orders', err)
		throw err
	}
}


async function add(order) {

	try {
		const collection = await dbService.getCollection('order')
		await collection.insertOne(order)

		return order
	} catch (err) {
		logger.error('cannot insert order', err)
		throw err
	}
}

async function update(order) {
	const orderToSave = { status: order.status }

	try {
		const criteria = { _id: ObjectId.createFromHexString(order._id) }

		const collection = await dbService.getCollection('order')
		await collection.updateOne(criteria, { $set: orderToSave })

		return order
	} catch (err) {
		logger.error(`cannot update order ${order._id}`, err)
		throw err
	}
}


function _buildCriteria(filterBy) {

	const criteria = {};

	return criteria;
}



function _buildSort(filterBy) {
	if (!filterBy.sortField) return {}
	return { [filterBy.sortField]: filterBy.sortDir }
}





// }
