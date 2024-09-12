import { ObjectId } from 'mongodb'

import { logger } from '../../services/logger.service.js'
import { makeId } from '../../services/util.service.js'
import { dbService } from '../../services/db.service.js'
import { asyncLocalStorage } from '../../services/als.service.js'
import { categories, getAboutGig, getCountry, getGigImg, getImg, getRandomBoolean, getRandomIntInclusive, getRandomReview, getRandomSentence, getReviewContent, getReviewTime, getSellerResponse } from './gigutil.service.js'

const PAGE_SIZE = 3

export const gigService = {
	remove,
	query,
	getById,
	add,
	update,
	addGigMsg,
	removeGigMsg,
}

async function query(filterBy = { txt: '' }) {

	try {
		const criteria = _buildCriteria(filterBy)
		const sort = _buildSort(filterBy)

		const collection = await dbService.getCollection('gig')

		// var gigCursor = await collection.find()

		// var gigCursor = await collection.find(criteria)
		var gigCursor = await collection.find(criteria, { sort })

		// if (filterBy.pageIdx !== undefined) {
		// 	gigCursor.skip(filterBy.pageIdx * PAGE_SIZE).limit(PAGE_SIZE)
		// }

		const gigs = gigCursor.toArray()
		return gigs
	} catch (err) {
		logger.error('cannot find gigs', err)
		throw err
	}
}

async function getById(gigId) {
	try {
		const criteria = { _id: ObjectId.createFromHexString(gigId) }

		const collection = await dbService.getCollection('gig')
		const gig = await collection.findOne(criteria)



		return gig
	} catch (err) {
		logger.error(`while finding gig ${gigId}`, err)
		throw err
	}
}

async function remove(gigId) {
	const { loggedinUser } = asyncLocalStorage.getStore()
	const { _id: ownerId, isAdmin } = loggedinUser

	try {
		const criteria = {
			_id: ObjectId.createFromHexString(gigId),
		}
		if (!isAdmin) criteria['owner._id'] = ownerId

		const collection = await dbService.getCollection('gig')
		const res = await collection.deleteOne(criteria)

		if (res.deletedCount === 0) throw ('Not your gig')
		return gigId
	} catch (err) {
		logger.error(`cannot remove gig ${gigId}`, err)
		throw err
	}
}

async function add(gig) {

	try {
		const collection = await dbService.getCollection('gig')
		await collection.insertOne(gig)

		return gig
	} catch (err) {
		logger.error('cannot insert gig', err)
		throw err
	}
}

async function update(gig) {
	const gigToSave = { vendor: gig.vendor, speed: gig.speed }

	try {
		const criteria = { _id: ObjectId.createFromHexString(gig._id) }

		const collection = await dbService.getCollection('gig')
		await collection.updateOne(criteria, { $set: gigToSave })

		return gig
	} catch (err) {
		logger.error(`cannot update gig ${gig._id}`, err)
		throw err
	}
}

async function addGigMsg(gigId, msg) {
	try {
		const criteria = { _id: ObjectId.createFromHexString(gigId) }
		msg.id = makeId()

		const collection = await dbService.getCollection('gig')
		await collection.updateOne(criteria, { $push: { msgs: msg } })

		return msg
	} catch (err) {
		logger.error(`cannot add gig msg ${gigId}`, err)
		throw err
	}
}

async function removeGigMsg(gigId, msgId) {
	try {
		const criteria = { _id: ObjectId.createFromHexString(gigId) }

		const collection = await dbService.getCollection('gig')
		await collection.updateOne(criteria, { $pull: { msgs: { id: msgId } } })

		return msgId
	} catch (err) {
		logger.error(`cannot add gig msg ${gigId}`, err)
		throw err
	}
}

// function _buildCriteria(filterBy) {
// 	const criteria = {
// 		txt: { $regex: filterBy.txt, $options: 'i' },
// 		price: { $gte: filterBy.price },
// 	}

// 	return criteria
// }
function _buildCriteria(filterBy) {

	const criteria = {};

	if (filterBy.txt) {
		const regexPattern = filterBy.txt.split(' ').join('|')
		const regex = new RegExp(regexPattern, 'i')

		criteria.$or = [
			{ title: { $regex: regex } },
			{ description: { $regex: regex } }
		];
	}


	if (filterBy.price) {
		if (filterBy.price === 'low') {

			criteria.price = { $lte: 100 }
		}
		else if (filterBy.price === 'mid') {
			criteria.price = { $gte: 101, $lte: 500 };
		} else if (filterBy.price === 'high') {
			criteria.price = { $gte: 501 };
		}
	}
	if (filterBy.daysToMake) {
		if (filterBy.daysToMake === 'day') {

			criteria.daysToMake = { $eq: 1 }
		}
		else if (filterBy.daysToMake === '3days') {
			criteria.daysToMake = { $gt: 1, $lte: 3 };
		} else if (filterBy.daysToMake === '7days') {
			criteria.daysToMake = { $gt: 3, $lte: 7 };
		}
		else if (filterBy.daysToMake === 'anytime') {
			criteria.daysToMake = { $gt: 7 };
		}
	}


	// if (filterBy.sortPrice) {
	// 	criteria.price = { $gt: filterBy.price }
	// }


	if (filterBy.category && filterBy.category !== 'ai' && filterBy.category !== 'consulting') {

		const categoryWords = categories[filterBy.category]
		const categoryRegexPattern = categoryWords.join('|')
		const categoryRegex = new RegExp(categoryRegexPattern, 'i')

		criteria.title = { $regex: categoryRegex }
	}



	return criteria;
}



function _buildSort(filterBy) {
	const sort = {}
	if (filterBy.sortPrice) {
		if (filterBy.sortPrice === 'price high to low') {
			sort.price = -1
		}
		if (filterBy.sortPrice === 'price low to high') {
			sort.price = 1
		}
	}
	return sort
}


export async function getRandomUser() {
	const usersCollection = await dbService.getCollection('user');

	const randomUser = await usersCollection.aggregate([{ $sample: { size: 1 } }]).toArray();


	return randomUser[0]; // since we are getting an array, return the first item
}


// getRandomUser()
// _createGigs()
async function _createGig() {
	const gig = { title: '', price: 0 }
	gig.title = getRandomSentence()
	gig.price = getRandomIntInclusive(15, 1000)
	gig.daysToMake = getRandomIntInclusive(1, 14)
	// gig._id = ObjectId.createFromHexString(makeId(24))
	// gig._id = makeId()
	gig._id = new ObjectId()
	const randomUser = await getRandomUser()
	const ownerRate = getRandomIntInclusive(1, 5)
	gig.owner = {
		_id: randomUser._id.toString(),
		fullname: randomUser.fullname,
		imgUrl: randomUser.imgUrl,
		rate: ownerRate,
		level: getRandomIntInclusive(1, 3),
		pro: getRandomBoolean()
	}
	const anotherRandomUser = await getRandomUser()
	const secondRandomUser = await getRandomUser()
	const thirdRandomUser = await getRandomUser()
	// gig.reviews = [
	// 	{
	// 		_id: makeId(),
	// 		rate: getRandomIntInclusive(1, 5),
	// 		txt: getRandomReview(gig.reviews[0].rate),
	// 		createdAt: getReviewTime(),
	// 		IsRepeatClient: true,
	// 		SellerResponse: getSellerResponse(),
	// 		by: {
	// 			_id: anotherRandomUser._id.toString(),
	// 			fullname: anotherRandomUser.fullname,
	// 			imgUrl: anotherRandomUser.imgUrl,
	// 		}
	// 	},
	// 	{
	// 		_id: makeId(),
	// 		rate: getRandomIntInclusive(1, 5),
	// 		txt: getRandomReview(rate),
	// 		createdAt: getReviewTime(),
	// 		IsRepeatClient: true,
	// 		SellerResponse: getSellerResponse(),
	// 		by: {
	// 			_id: secondRandomUser._id.toString(),
	// 			fullname: secondRandomUser.fullname,
	// 			imgUrl: secondRandomUser.imgUrl,
	// 		}
	// 	},
	// 	{
	// 		_id: makeId(),
	// 		rate: getRandomIntInclusive(1, 5),
	// 		txt: getRandomReview(rate),
	// 		createdAt: getReviewTime(),
	// 		IsRepeatClient: true,
	// 		SellerResponse: getSellerResponse(),
	// 		by: {
	// 			_id: thirdRandomUser._id.toString(),
	// 			fullname: thirdRandomUser.fullname,
	// 			imgUrl: thirdRandomUser.imgUrl,
	// 		}
	// 	},

	// ]
	gig.reviews = [
		(() => {
			const rate = getRandomIntInclusive(1, 5);
			return {
				_id: makeId(),
				rate: rate,
				txt: getRandomReview(rate),
				createdAt: getReviewTime(),
				IsRepeatClient: true,
				SellerResponse: getSellerResponse(),
				by: {
					_id: anotherRandomUser._id.toString(),
					fullname: anotherRandomUser.fullname,
					imgUrl: anotherRandomUser.imgUrl,
				},
				country: getCountry()
			};
		})(),
		(() => {
			const rate = getRandomIntInclusive(1, 5);
			return {
				_id: makeId(),
				rate: rate,
				txt: getRandomReview(rate),
				createdAt: getReviewTime(),
				IsRepeatClient: true,
				SellerResponse: getSellerResponse(),
				by: {
					_id: secondRandomUser._id.toString(),
					fullname: secondRandomUser.fullname,
					imgUrl: secondRandomUser.imgUrl,
				},
				country: getCountry()
			};
		})(),
		(() => {
			const rate = getRandomIntInclusive(1, 5);
			return {
				_id: makeId(),
				rate: rate,
				txt: getRandomReview(rate),
				createdAt: getReviewTime(),
				IsRepeatClient: true,
				SellerResponse: getSellerResponse(),
				by: {
					_id: thirdRandomUser._id.toString(),
					fullname: thirdRandomUser.fullname,
					imgUrl: thirdRandomUser.imgUrl,
				},
				country: getCountry()
			};
		})(),
	];

	// gig.reviewCountry = getCountry()

	gig.aboutGig = getAboutGig()
	// temp
	// gig.owner = makeUserNameLorem()
	// gig.ownerRating = getGitRating(0, 5)
	// gig.ownerLevel = getRandomIntInclusive(1, 3)
	// gig.ownerOrders = getRandomIntInclusive(1, 30)
	// gig.ownerPro = getRandomBoolean()
	gig.ownerImage = getImg()
	// reviews
	// gig.reviewName = makeUserNameLorem()
	gig.reviewImage = getImg()
	// gig.reviewContent = getReviewContent()
	// gig.reviewRating = getRandomIntInclusive(0, 5)
	// gig.reviewTime = getReviewTime()
	// gig.reviewIsRepeatClient = getRepeatClient()
	// gig.reviewIsRepeatClient = true
	// gig.reviewSellerResponse = getSellerResponse()

	return gig
}

async function _createGigs() {
	try {
		let gigs = []
		const collection = await dbService.getCollection('gig')
		for (var i = 0; i < 100; i++) {
			gigs.push(_createGig())
		}
		gigs = await Promise.all(gigs)

		const gigsWithImages = getGigImg(gigs);
		await collection.insertMany(gigsWithImages)


	} catch (err) {
		logger.error('cannot insert gig', err)
		throw err
	}


	// saveToStorage(STORAGE_KEY, gigsWithImages);
}
// }
