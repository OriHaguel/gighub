import { authService } from './auth.service.js'
import { logger } from '../../services/logger.service.js'
import { dbService } from '../../services/db.service.js'
import { generateRandomUsername, getImg, makeUserNameLorem } from '../gig/gigutil.service.js'

export async function login(req, res) {
	const { username, password } = req.body
	try {
		const user = await authService.login(username, password)
		const loginToken = authService.getLoginToken(user)

		logger.info('User login: ', user)

		res.cookie('loginToken', loginToken, { sameSite: 'None', secure: true })
		res.json(user)
	} catch (err) {
		logger.error('Failed to Login ' + err)
		res.status(401).send({ err: 'Failed to Login' })
	}
}

export async function signup(req, res) {
	try {
		const credentials = req.body

		// Never log passwords
		// logger.debug(credentials)

		const account = await authService.signup(credentials)
		logger.debug(`auth.route - new account created: ` + JSON.stringify(account))

		const user = await authService.login(credentials.username, credentials.password)
		logger.info('User signup:', user)

		const loginToken = authService.getLoginToken(user)
		res.cookie('loginToken', loginToken, { sameSite: 'None', secure: true })
		res.json(user)
	} catch (err) {
		logger.error('Failed to signup ' + err)
		res.status(400).send({ err: 'Failed to signup' })
	}
}

export async function logout(req, res) {
	try {
		res.clearCookie('loginToken')
		res.send({ msg: 'Logged out successfully' })
	} catch (err) {
		res.status(400).send({ err: 'Failed to logout' })
	}
}






// export async function createUsers(req, res) {
// 	try {
// 		// for (let i = 0; i < 10; i++) {


// 		// }
// 		// await authService.signup({ fullname: 'Puki Norma', username: 'puki', password: 'vdxvvx' })
// 		// await authService.signup({ fullname: 'Master Adminov', username: 'admin', password: 'vxvxv' })
// 		// await authService.signup({ fullname: 'Muki G', username: 'muki', password: '12xvxvxv3' })
// 	} catch (err) {
// 		res.status(400).send({ err: 'Failed to logout' })
// 	}
// }
// _createUsers()
async function _createUsers() {
	try {
		for (let i = 0; i < 30; i++) {


			await authService.signup({ fullname: makeUserNameLorem(), username: generateRandomUsername(), password: '123', imgUrl: getImg() })
		}
	} catch (error) {
		console.log("🚀 ~ createUsers ~ error:", error)

	}

}