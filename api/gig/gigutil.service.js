
const STORAGE_KEY = 'gig'

export function makeId(prefix, length = 10) {
	var txt = `${prefix}-`
	var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

	for (var i = 0; i < length; i++) {
		txt += possible.charAt(Math.floor(Math.random() * possible.length))
	}

	return txt
}


export function getRandomIntInclusive(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}

export function getRandomBoolean() {
	return Math.random() < 0.5
}

export function randomPastTime() {
	const HOUR = 1000 * 60 * 60
	const DAY = 1000 * 60 * 60 * 24
	const WEEK = 1000 * 60 * 60 * 24 * 7

	const pastTime = getRandomIntInclusive(HOUR, WEEK)
	return Date.now() - pastTime
}

export function debounce(func, timeout = 300) {
	let timer
	return (...args) => {
		clearTimeout(timer)
		timer = setTimeout(() => {
			func.apply(this, args)
		}, timeout)
	}
}

export function saveToStorage(key, value) {
	localStorage.setItem(key, JSON.stringify(value))
}

export function loadFromStorage(key) {
	const data = localStorage.getItem(key)
	return data ? JSON.parse(data) : undefined
}



export function makeUserNameLorem() {
	const firstNames = [
		"Alex", "Avery", "Bailey", "Blake", "Cameron", "Casey", "Charlie", "Dakota", "Devon", "Drew",
		"Dylan", "Eden", "Elliott", "Emerson", "Finley", "Frankie", "Harper", "Hayden", "Hunter", "Jamie",
		"Jayden", "Jordan", "Jules", "Kai", "Kelly", "Kendall", "Kennedy", "Lane", "Lee", "Logan",
		"Morgan", "Parker", "Peyton", "Quinn", "Reese", "Riley", "River", "Robin", "Rowan", "Sage",
		"Sawyer", "Skyler", "Spencer", "Stevie", "Sydney", "Taylor", "Tegan", "Toby", "Toni", "Tyler", "Sam"
	]

	const lastNames = [
		// English/American
		"Smith", "Johnson", "Brown", "Taylor", "Wilson", "Adams", "Baker", "Carter",
		"Cooper", "Evans", "Edwards", "Foster", "Gray", "Green", "Hill", "Hughes",
		"Mitchell", "Parker", "Phillips", "Roberts", "Russell", "Stewart", "Turner",
		"Ward", "Wood",

		// Spanish/Latino
		"Hernandez", "Gonzalez", "Perez", "Sanchez", "Ramirez", "Flores", "Rivera",
		"Torres", "Diaz", "Morales",

		// Italian
		"Rossi", "Romano", "Costa", "Greco", "Lombardi",

		// French
		"Dupont", "Moreau", "Lefevre", "Dubois", "Fontaine",

		// German
		"Müller", "Schmidt", "Schneider", "Fischer", "Weber"
	]

	const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)]
	const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)]

	return `${randomFirstName} ${randomLastName}`
}

export function getPlan() {
	const randomValue = Math.random()
	return randomValue < 0.8 ? 'basic' : 'premium'
}

export const categories = {
	programming: ['web', 'app', 'software', 'coding', 'algorithms', 'JavaScript', 'Python', 'backend', 'frontend', 'database'],
	graphics: ['logo', 'UI', 'graphic', 'illustration', 'branding', 'typography', 'color', 'layout', 'icons', 'photoshop'],
	digital: ['SEO', 'hacking', 'social', 'email', 'PPC', 'analytics', 'ads', 'keywords', 'campaign', 'influencers'],
	writing: ['copywriting', 'modern', 'technical', 'translation', 'proofreading', 'copyediting', 'blogging', 'articles', 'scripts', 'localization'],
	video: ['movie', 'motion', '2D', '3D', 'HD', 'animations', 'Directing', 'storyboard', 'vfx', 'rendering'],
	music: ['instrument', 'melody', 'voiceover', 'mixing', 'podcasting', 'recording', 'composition', 'chord ', 'beats', 'synth'],
	business: ['strategy', 'management', 'entrepreneurship', 'finance', 'consulting', 'startup', 'operations', 'leadership', 'deals', 'investment'],
}


export function getRandomSentence() {
	const sentences = [
		// Programming
		`We specialize in developing scalable ${getRandomWord(categories.programming)} solutions tailored to your needs.`,
		`Our ${getRandomWord(categories.programming)} expertise ensures high-performance applications and systems.`,
		`We offer comprehensive ${getRandomWord(categories.programming)} services to help you stay ahead of the competition.`,
		`From ${getRandomWord(categories.programming)} development to full-stack solutions, we have you covered.`,
		`Transform your digital presence with our ${getRandomWord(categories.programming)} and technology solutions.`,
		`Our team excels in ${getRandomWord(categories.programming)} to deliver robust and innovative solutions.`,
		`We provide end-to-end ${getRandomWord(categories.programming)} services to build your next big project.`,
		`Leverage our ${getRandomWord(categories.programming)} skills to enhance your site capabilities.`,
		`We design and develop ${getRandomWord(categories.programming)} solutions that drive business growth.`,
		`Our ${getRandomWord(categories.programming)} experts work closely with you to bring your vision to life.`,

		// Graphics
		`We craft visually appealing ${getRandomWord(categories.graphics)} that resonate with your audience.`,
		`Our ${getRandomWord(categories.graphics)} design services create a memorable and impactful brand identity.`,
		`Transform your ideas into stunning ${getRandomWord(categories.graphics)} with our expert design team.`,
		`We offer innovative ${getRandomWord(categories.graphics)} solutions to make your brand stand out.`,
		`From ${getRandomWord(categories.graphics)} to ${getRandomWord(categories.graphics)}, we ensure your visuals are top-notch.`,
		`Our ${getRandomWord(categories.graphics)} experts will bring your creative vision to life.`,
		`Enhance your brand’s image with our custom ${getRandomWord(categories.graphics)} services.`,
		`We design ${getRandomWord(categories.graphics)} that effectively communicate your brand’s message.`,
		`Our ${getRandomWord(categories.graphics)} solutions are tailored to fit your unique style and needs.`,
		`Create a lasting impression with our professional ${getRandomWord(categories.graphics)} design.`,

		// Digital
		`Boost your online presence with our ${getRandomWord(categories.digital)} strategies.`,
		`We offer comprehensive ${getRandomWord(categories.digital)} services to drive traffic and engagement.`,
		`Our ${getRandomWord(categories.digital)} expertise ensures your brand reaches the right audience.`,
		`Enhance your marketing efforts with our ${getRandomWord(categories.digital)} solutions.`,
		`We specialize in ${getRandomWord(categories.digital)} to increase your brand’s visibility.`,
		`Our ${getRandomWord(categories.digital)} services are designed to maximize your ROI.`,
		`From ${getRandomWord(categories.digital)} to ${getRandomWord(categories.digital)}, we cover all your marketing needs.`,
		`We create targeted ${getRandomWord(categories.digital)} campaigns to boost your online success.`,
		`Our ${getRandomWord(categories.digital)} strategies help you stay ahead in a competitive market.`,
		`Transform your digital marketing with our expert ${getRandomWord(categories.digital)} services.`,

		// Writing
		`Get high-quality ${getRandomWord(categories.writing)} for all your content needs.`,
		`We provide ${getRandomWord(categories.writing)} services to communicate your message effectively.`,
		`From ${getRandomWord(categories.writing)} to ${getRandomWord(categories.writing)}, we cover all your writing needs.`,
		`Our ${getRandomWord(categories.writing)} experts craft content that engages and informs.`,
		`We offer professional ${getRandomWord(categories.writing)} for a wide range of applications.`,
		`Enhance your content with our ${getRandomWord(categories.writing)} and editing services.`,
		`Our ${getRandomWord(categories.writing)} solutions ensure clarity and precision in your documents.`,
		`We specialize in ${getRandomWord(categories.writing)} to bring your ideas to life.`,
		`Get reliable ${getRandomWord(categories.writing)} services tailored to your needs.`,
		`Our ${getRandomWord(categories.writing)} services are designed to meet high-quality standards.`,

		// Video
		`Enhance your brand with our ${getRandomWord(categories.video)} and animation services.`,
		`We create engaging ${getRandomWord(categories.video)} that tell your story beautifully.`,
		`Our ${getRandomWord(categories.video)} solutions bring your ideas to life with stunning visuals.`,
		`From ${getRandomWord(categories.video)} to ${getRandomWord(categories.video)}, we handle all aspects of video production.`,
		`We offer expert ${getRandomWord(categories.video)} to make your project stand out.`,
		`Transform your concepts into dynamic ${getRandomWord(categories.video)} with our services.`,
		`Our ${getRandomWord(categories.video)} professionals create high-quality content to captivate your audience.`,
		`We provide innovative ${getRandomWord(categories.video)} solutions for all your visual needs.`,
		`Enhance your storytelling with our ${getRandomWord(categories.video)} and animation.`,
		`Our ${getRandomWord(categories.video)} services ensure that your message is delivered with impact.`,

		// Music
		`Our ${getRandomWord(categories.music)} services deliver exceptional sound and music experiences.`,
		`From ${getRandomWord(categories.music)} production to editing, we handle all your audio needs.`,
		`We offer professional ${getRandomWord(categories.music)} to make your project sound great.`,
		`Enhance your content with our ${getRandomWord(categories.music)} and sound design expertise.`,
		`We create high-quality ${getRandomWord(categories.music)} for a range of applications.`,
		`Our ${getRandomWord(categories.music)} solutions bring a polished sound to your media.`,
		`Get top-notch ${getRandomWord(categories.music)} services to elevate your project.`,
		`Our ${getRandomWord(categories.music)} experts provide creative solutions to meet your needs.`,
		`We specialize in ${getRandomWord(categories.music)} to deliver clear and impactful audio.`,
		`Transform your audio experience with our professional ${getRandomWord(categories.music)} services.`,

		// Business
		`We provide ${getRandomWord(categories.business)} solutions to help your company thrive.`,
		`Our ${getRandomWord(categories.business)} expertise ensures strategic growth and operational excellence.`,
		`From ${getRandomWord(categories.business)} to ${getRandomWord(categories.business)}, we support your business success.`,
		`We offer comprehensive ${getRandomWord(categories.business)} services to enhance your business move.`,
		`Our ${getRandomWord(categories.business)} solutions are designed to drive innovation and efficiency.`,
		`Leverage our ${getRandomWord(categories.business)} expertise to achieve your strategic goals.`,
		`We specialize in ${getRandomWord(categories.business)} to streamline your business processes.`,
		`Our ${getRandomWord(categories.business)} services are tailored to meet the unique needs of your business.`,
		`Enhance your company's performance with our ${getRandomWord(categories.business)} strategies.`,
		`We offer expert ${getRandomWord(categories.business)} to support your business growth and development.`,
	]

	const randomIndex = Math.floor(Math.random() * sentences.length)
	return sentences[randomIndex]
}

function getRandomWord(wordList) {
	return wordList[Math.floor(Math.random() * wordList.length)]
}




export function getGigImg(gigs) {
	//~70+ gigs
	const imgCategories = {
		//tech
		programming: [
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/v1681292390/1.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/v1681292390/2.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/v1681292390/3.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/v1681292390/tech_5_1_lnpdet.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/v1681292390/tech_5_1_xkx2su.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/v1681292390/tech_5_2_ingp2n.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/prog2_1_rglah7.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/prog2_2_ktpg4w.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/prog2_3_r12pmp.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_ieqqi5.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_mxc78m.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_k7abw0.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_sfu5ye.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_est8wa.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_dduzty.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_wsvd6m.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/5_etcyta.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_mvdoq5.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_bge79q.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_pnwh0l.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_hnlpgx.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/5_fk2x0b.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/6_ayhnhy.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_q4va92.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_iybtmb.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_r8ghua.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_egvgdt.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_s2htmr.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_kyn0mz.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/video/upload/1_atkdne.mp4',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_loeg1k.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_buj68p.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_py5kzw.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/5_lpdb3l.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_viz2b8.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_gxra0m.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_rucfqm.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/tech_3_1_yh5r1p.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/tech_3_1_udxnne.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/tech_3_2_qjkelz.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/2_gqapyn.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_fjcp1e.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/5_h4ivae.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_pxpdti.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_uyyybp.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_nhag8g.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/video/upload/1_l4kqsx.mp4',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_nddyio.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_uvn9tj.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_o8kmxq.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_hcqwri.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/tech_4_1_ydbquq.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/tech_4_3_qfio6h.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/tech_4_4_ndppln.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/video/upload/q6chgrdybqmxeps2ygwg_e8q2vp.mp4',
				'https://res.cloudinary.com/dofblayxi/image/upload/do-data-structure-and-algorithm-assignments_gtay7z.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/do-data-structure-and-algorithm-assignments_1_tt9me0.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/do-data-structure-and-algorithm-assignments_2_uanqnr.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/video/upload/axzmtngkcldutxythyxn_rnvyrd.mp4',
				'https://res.cloudinary.com/dofblayxi/image/upload/software-and-games-development-in-java-javafx_1_g3w6uz.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/software-and-games-development-in-java-javafx_qhz2ww.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/software-and-games-development-in-java-javafx_2_vl1vie.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/develop-any-custom-software-or-app-for-any-platform_df9x2b.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/be-your-python-superhero-script-code-web-scraping-automation_ehxlku.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/video/upload/pgzruaedhn3lokcbz9fv_xmosef.mp4',
				'https://res.cloudinary.com/dofblayxi/image/upload/create-a-windows-desktop-application-for-your-business_g6vfxx.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/create-a-windows-desktop-application-for-your-business_2_ocwkx7.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/create-a-windows-desktop-application-for-your-business_1_zrmy5j.webp'
			],
		],
		//design
		graphics: [
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_z9rrab.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_veg6zj.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_cdadns.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_d52ipm.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_dqbi2y.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_dnqzt0.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/5_kuv9a9.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/6_bzveuq.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/7_v4zegm.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/3_bt99v7.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_wwlfsy.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/5_zpzban.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/6_o6apzw.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/0_a5v53p.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/00_ejnxb4.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/000_ytqxle.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_wpgskd.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_jto6cd.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_oqg4j7.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_hzy27x.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/5_in6nn7.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_u0epwq.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_hf811f.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_bbxhrz.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_fsivb3.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/video/upload/1_te6haz.mp4',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_hm8zb2.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_ucztjn.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_y8pvtp.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/5_dmdekn.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/6_fsplen.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/video/upload/1_polrvq.mp4',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_qann3f.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_qrf9vv.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_jy4af5.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_eg0mqf.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_llhqdi.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_dos0se.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_jais4s.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_wrrxol.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/8_xotlul.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/9_qijaz0.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/12_lmlmx9.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/13_d3n37o.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/14_jcoqeo.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/15_yotesc.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/14_s493u5.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/15_go9dhl.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/16_cgnano.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/17_f671gx.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/18_sazx9g.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/19_ouvuym.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/20_vl6rkg.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/21_lzz8se.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/13_vnnnhp.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/12_xnrk8y.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/11_nv0dm3.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/10_anksaj.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/9_hoyw4t.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/8_kb6lbj.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_r37ayg.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_dh0bi3.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_ph5fs0.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/123_dysibp.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_hj3sqn.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_igauqd.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_nto8dn.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_c9xsyt.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/5_gkivre.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_nocvyv.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_nnzvwn.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_q4qvex.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_n4qzby.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_toexu9.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_vmib00.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_hfcid6.webp'
			],
		],
		//animation
		video: [
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/00_dxalu8.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/0_xqvxje.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/11_ckswgc.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/3_s1rtwn.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_bqz2bq.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_d6ahg6.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/video/upload/1_mrrzig.mp4',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_bgvprq.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_ej64fz.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/5_cpm6zv.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_iacxim.webp',
				'https://res.cloudinary.com/dofblayxi/video/upload/2_gjl1lu.mp4',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_rbsp1x.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/video/upload/1_nyif3p.mp4',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_gv9uti.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_lewwbl.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_oqao3n.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/video/upload/1_ghmtv3.mp4',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_nhehgy.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_vkckns.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_td9ey7.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/video/upload/samples/sea-turtle.mp4',
				'https://res.cloudinary.com/dofblayxi/image/upload/samples/animals/kitten-playing.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/video/upload/samples/elephants.mp4',
				'https://res.cloudinary.com/dofblayxi/image/upload/samples/animals/reindeer.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/cld-sample-2.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/samples/balloons.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/cld-sample-5.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/cld-sample.webp',
				// 'https://res.cloudinary.com/dofblayxi/image/upload/samples/dessert-on-a-plate.webp'
			],
		],
		//translation
		writing: [
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/2_ymahhr.webp',
				'https://res.cloudinary.com/dofblayxi/video/upload/1_hluacb.mp4',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_jpdk6y.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_h8g4ck.webp'

			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_zmsai2.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_xcvsns.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_lnpodr.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_qpzm75.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_llghjy.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_helgmv.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_ll85yj.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_cj48yf.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_ozcalj.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_cp9rgx.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_ipqtx1.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_lnj06l.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_efflfv.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_xzab67.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_lploc4.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_fmwkyq.webp'
			],
		],
		//marketing
		digital: [
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/2_x8amij.webp',
				'https://res.cloudinary.com/dofblayxi/video/upload/1_hehnqd.mp4',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_th9jl2.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_tdcu3d.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_seypam.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_kcupoa.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_l8kglv.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_rtebfu.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_g04bxx.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_sbi4xc.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_c5oc2y.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_mxphj2.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_fd72b6.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_ucvzib.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_w4opjt.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/5_a0dqvd.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_ykqusz.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_scg8fm.webp'
			],
		],
		//audio
		music: [
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_qxm2qw.webp',
				// 'https://res.cloudinary.com/dofblayxi/image/upload/2_soydkl.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_okyazc.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_nd8ifz.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_dxzmay.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_aqw4bd.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_hnjuc2.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_mgg5qg.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_exckn1.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_absxs1.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/4_ucw0wc.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/7_ryyvnm.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/m_1_bnx2e7.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/m_2_wyluxz.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/m_v8pfvv.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_td6qnb.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_xvzkqj.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_neju3l.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_uzufey.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_udhyj6.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_rlawua.webp'
			],
		],

		business: [
			[
				'https://res.cloudinary.com/dofblayxi/video/upload/1_kjyj7d.mp4',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_iao93d.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_kssgez.webp'
			],
			[
				// 'https://res.cloudinary.com/dofblayxi/image/upload/get-your-ein-number-from-irs-for-us-and-non-us-citizens_wmnm7v.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/get-your-ein-number-from-irs-for-us-and-non-us-citizens_yy3pv2.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/get-your-ein-number-from-irs-for-us-and-non-us-citizens_1_jduj12.webp'],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_bcpqls.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_fgvas5.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_r5lqse.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_n5fw3d.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_rtzhfe.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_c6obj1.webp'
			],
		],
		//legal
		consulting: [
			[
				'https://res.cloudinary.com/dofblayxi/video/upload/1_t69iqg.mp4',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_unknhc.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_cqa3bi.webp'
			],
		],
		//AI
		ai: [
			[
				'https://res.cloudinary.com/dofblayxi/video/upload/1_u4up1q.webp'
			]
		]
	}

	const categoryKeys = Object.keys(categories)
	const gigMap = new Map() // Use a Map to track gigs and avoid duplicates

	categoryKeys.forEach((category) => {
		const categoryKeywords = categories[category]
		const images = imgCategories[category] || []
		const filteredGigs = gigs
			.filter(gig => categoryKeywords.some(word => gig.title.includes(word)))


		filteredGigs.forEach((gig, index) => {
			if (!gigMap.has(gig._id)) { // Use _id to ensure uniqueness
				const img = images[index] || [] // Use default empty array if index exceeds images length
				gigMap.set(gig._id, { ...gig, img })
			}
		})
	})


	return Array.from(gigMap.values()); // Convert Map values to an array
}

//!!! DONT DELETE(YET)!!!
// export function getGigImg(gigs) {

// 	const imgCategories = {
// 		//tech
// 		programming: [
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/v1681292390/1.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/v1681292390/2.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/v1681292390/3.webp'
// 			],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/v1681292390/tech_5_1_lnpdet.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/v1681292390/tech_5_1_xkx2su.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/v1681292390/tech_5_2_ingp2n.webp'
// 			],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/prog2_1_rglah7.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/prog2_2_ktpg4w.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/prog2_3_r12pmp.webp'
// 			],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/1_ieqqi5.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/2_mxc78m.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/3_k7abw0.webp'
// 			],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/1_sfu5ye.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/2_est8wa.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/3_dduzty.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/4_wsvd6m.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/5_etcyta.webp'
// 			],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/1_mvdoq5.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/2_bge79q.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/3_pnwh0l.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/4_hnlpgx.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/5_fk2x0b.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/6_ayhnhy.webp'
// 			],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/1_q4va92.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/2_iybtmb.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/3_r8ghua.webp'
// 			],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/1_egvgdt.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/2_s2htmr.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/3_kyn0mz.webp'
// 			],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/tech_3_1_yh5r1p.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/tech_3_1_udxnne.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/tech_3_2_qjkelz.webp'
// 			],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/2_gqapyn.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/3_fjcp1e.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/5_h4ivae.webp'
// 			],


// 		],
// 		//design
// 		graphics: [
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/1_z9rrab.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/2_veg6zj.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/3_cdadns.webp'
// 			],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/1_d52ipm.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/3_dqbi2y.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/4_dnqzt0.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/5_kuv9a9.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/6_bzveuq.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/7_v4zegm.webp'
// 			],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/3_bt99v7.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/4_wwlfsy.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/5_zpzban.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/6_o6apzw.webp'
// 			],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/0_a5v53p.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/00_ejnxb4.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/000_ytqxle.webp'
// 			],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/1_wpgskd.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/2_jto6cd.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/3_oqg4j7.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/4_hzy27x.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/5_in6nn7.webp'
// 			],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/1_u0epwq.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/2_hf811f.webp'
// 			],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/1_bbxhrz.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/2_fsivb3.webp'
// 			]
// 		],
// 		//animation
// 		video: [
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/00_dxalu8.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/0_xqvxje.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/11_ckswgc.webp'
// 			],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/3_s1rtwn.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/2_bqz2bq.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/4_d6ahg6.webp'
// 			],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/cld-sample-2.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/samples/balloons.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/cld-sample-5.webp'
// 			],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/cld-sample.webp',
// 				// 'https://res.cloudinary.com/dofblayxi/image/upload/samples/dessert-on-a-plate.webp'
// 			],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/video/upload/samples/sea-turtle.mp4',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/samples/animals/kitten-playing.webp'
// 			],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/video/upload/samples/elephants.mp4',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/samples/animals/reindeer.webp'
// 			],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/video/upload/1_mrrzig.mp4',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/2_bgvprq.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/3_ej64fz.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/5_cpm6zv.webp'
// 			],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/1_iacxim.webp',
// 				'https://res.cloudinary.com/dofblayxi/video/upload/2_gjl1lu.mp4',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/3_rbsp1x.webp'
// 			]
// 		],
// 		//translation
// 		writing: [
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/2_ymahhr.webp',
// 				'https://res.cloudinary.com/dofblayxi/video/upload/1_hluacb.mp4',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/3_jpdk6y.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/4_h8g4ck.webp'

// 			],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/1_zmsai2.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/2_xcvsns.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/3_lnpodr.webp'
// 			],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/1_qpzm75.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/2_llghjy.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/3_helgmv.webp'
// 			],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/1_ll85yj.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/3_cj48yf.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/4_ozcalj.webp'
// 			],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/1_cp9rgx.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/2_ipqtx1.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/3_lnj06l.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/4_efflfv.webp'
// 			]
// 		],
// 		//marketing
// 		digital: [
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/1_mxphj2.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/2_fd72b6.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/3_ucvzib.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/4_w4opjt.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/5_a0dqvd.webp'
// 			],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/2_x8amij.webp',
// 				'https://res.cloudinary.com/dofblayxi/video/upload/1_hehnqd.mp4',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/3_th9jl2.webp'
// 			],
// 			['https://res.cloudinary.com/dofblayxi/image/upload/1_tdcu3d.webp'],
// 			['https://res.cloudinary.com/dofblayxi/image/upload/1_seypam.webp'],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/1_kcupoa.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/2_l8kglv.webp'
// 			],
// 		],
// 		//audio
// 		music: [
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/1_qxm2qw.webp',
// 				// 'https://res.cloudinary.com/dofblayxi/image/upload/2_soydkl.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/3_okyazc.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/4_nd8ifz.webp'
// 			],
// 			['https://res.cloudinary.com/dofblayxi/image/upload/1_dxzmay.webp'],
// 			['https://res.cloudinary.com/dofblayxi/image/upload/1_aqw4bd.webp'],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/4_ucw0wc.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/7_ryyvnm.webp'
// 			],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/m_1_bnx2e7.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/m_2_wyluxz.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/m_v8pfvv.webp'
// 			],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/1_td6qnb.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/2_xvzkqj.webp'
// 			],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/1_neju3l.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/2_uzufey.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/3_udhyj6.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/4_rlawua.webp'
// 			]
// 		],

// 		business: [
// 			[
// 				// 'https://res.cloudinary.com/dofblayxi/image/upload/get-your-ein-number-from-irs-for-us-and-non-us-citizens_wmnm7v.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/get-your-ein-number-from-irs-for-us-and-non-us-citizens_yy3pv2.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/get-your-ein-number-from-irs-for-us-and-non-us-citizens_1_jduj12.webp'],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/1_bcpqls.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/2_fgvas5.webp'
// 			],
// 			['https://res.cloudinary.com/dofblayxi/image/upload/1_r5lqse.webp'],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/image/upload/1_n5fw3d.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/2_rtzhfe.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/3_c6obj1.webp'
// 			],
// 			[
// 				'https://res.cloudinary.com/dofblayxi/video/upload/1_kjyj7d.mp4',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/2_iao93d.webp',
// 				'https://res.cloudinary.com/dofblayxi/image/upload/3_kssgez.webp'
// 			]
// 		]
// 	}

// 	const categoryKeys = Object.keys(categories);
// 	const newGigs = []
// 	categoryKeys.map((category) => {
// 		const gigImg = gigs.filter(gig => categories[category].some(word => gig.title.includes(word)))
// 			.map((gig, index) => (
// 				{ ...gig, img: imgCategories[category][index] }
// 			))
// 		newGigs.push(...gigImg)
// 	})
// 	return newGigs
// }

export function getCountry() {
	const countries = ['USA', 'UK', 'Canada', 'Australia', 'France', 'Germany', 'Japan', 'India', 'China', 'Russia', 'Italy', 'Spain', 'Netherlands', 'Belgium', 'Switzerland', 'Austria', 'Poland', 'Greece', 'Romania', 'Portugal', 'Turkey', 'Ireland', 'Denmark', 'Sweden', 'Norway', 'Finland', 'Iceland', 'Luxembourg', 'Malta', 'Cyprus', 'Slovakia', 'Estonia', 'Latvia', 'Lithuania', 'Hungary', 'Slovenia', 'Croatia', 'Bosnia and Herzegovina', 'Serbia', 'Montenegro', 'Macedonia']
	// const flags = ['🇺🇸', '🇬🇧', '🇨🇦', '🇦🇺', '🇫🇷', '🇩🇪', '🇯🇵', '🇮🇳', '🇨🇳', '🇷🇺', '🇮🇹', '🇪🇸', '🇳🇱', '🇧🇪', '🇨🇭', '🇦🇹', '🇵🇱', '🇬🇷', '🇷🇴', '🇵🇹', '🇹🇷', '🇮🇪', '🇩🇰', '🇸🇪', '🇳🇴', '🇫🇮', '🇮🇸', '🇱🇺', '🇲🇹', '🇨🇾', '🇸🇰', '🇪🇪', '🇱🇻', '🇱🇹', '🇭🇺', '🇸🇮', '🇭🇷', '🇧🇦', '🇷🇸', '🇲🇪', '🇽🇰', '🇲🇰']
	const flags = [
		'https://flagsapi.com/US/flat/64.png',
		'https://flagsapi.com/GB/flat/64.png',
		'https://flagsapi.com/CA/flat/64.png',
		'https://flagsapi.com/AU/flat/64.png',
		'https://flagsapi.com/FR/flat/64.png',
		'https://flagsapi.com/DE/flat/64.png',
		'https://flagsapi.com/JP/flat/64.png',
		'https://flagsapi.com/IN/flat/64.png',
		'https://flagsapi.com/CN/flat/64.png',
		'https://flagsapi.com/RU/flat/64.png',
		'https://flagsapi.com/IT/flat/64.png',
		'https://flagsapi.com/ES/flat/64.png',
		'https://flagsapi.com/NL/flat/64.png',
		'https://flagsapi.com/BE/flat/64.png',
		'https://flagsapi.com/CH/flat/64.png',
		'https://flagsapi.com/AT/flat/64.png',
		'https://flagsapi.com/PL/flat/64.png',
		'https://flagsapi.com/GR/flat/64.png',
		'https://flagsapi.com/RO/flat/64.png',
		'https://flagsapi.com/PT/flat/64.png',
		'https://flagsapi.com/TR/flat/64.png',
		'https://flagsapi.com/IE/flat/64.png',
		'https://flagsapi.com/DK/flat/64.png',
		'https://flagsapi.com/SE/flat/64.png',
		'https://flagsapi.com/NO/flat/64.png',
		'https://flagsapi.com/FI/flat/64.png',
		'https://flagsapi.com/IS/flat/64.png',
		'https://flagsapi.com/LU/flat/64.png',
		'https://flagsapi.com/MT/flat/64.png',
		'https://flagsapi.com/CY/flat/64.png',
		'https://flagsapi.com/SK/flat/64.png',
		'https://flagsapi.com/EE/flat/64.png',
		'https://flagsapi.com/LV/flat/64.png',
		'https://flagsapi.com/LT/flat/64.png',
		'https://flagsapi.com/HU/flat/64.png',
		'https://flagsapi.com/SI/flat/64.png',
		'https://flagsapi.com/HR/flat/64.png',
		'https://flagsapi.com/BA/flat/64.png',
		'https://flagsapi.com/RS/flat/64.png',
		'https://flagsapi.com/ME/flat/64.png',
		'https://flagsapi.com/XK/flat/64.png',
		'https://flagsapi.com/MK/flat/64.png'
	]
	const random = getRandomIntInclusive(0, countries.length - 1)
	const country = countries[random]
	const flag = flags[random]

	return { country, flag }
}

export function getImg() {
	const profilePicApi = 'https://xsgames.co/randomusers/assets/avatars/'
	const gender = Math.random() < 0.5 ? 'male/' : 'female/'
	const number = getRandomIntInclusive(1, 60)
	return `${profilePicApi}${gender}${number}.jpg`
}


export function getReviewContent() {
	const sentences = [
		'The quality of the work was exceptional. The client was extremely satisfied with the result.',
		'Outstanding. The client loved it.',
		'The project was completed on time, and the client was very satisfied with the final product.',
		'Excellent service. The client was impressed.',
		'The team was incredibly helpful and met all the client’s requirements. The product was perfect.',
		'The client was impressed with the quality of the work, and the team was exceptionally responsive.',

		// Paragraphs
		'The client was thoroughly impressed with the quality of the work delivered by the team. They appreciated not only the final product but also the professionalism and dedication displayed throughout the project. From start to finish, the team was responsive, attentive to details, and committed to meeting all the client’s expectations. This level of service is rare, and it truly set the team apart in the client’s eyes.',
		'The project was managed with utmost care and precision, which was evident in the final result. The team demonstrated exceptional skills in understanding and translating the client’s vision into a tangible product. The client noted that the communication throughout the project was seamless, making it easy to address any concerns or changes promptly. This smooth collaboration contributed significantly to the success of the project, and the client expressed a high level of satisfaction with the outcome.',
		'From the initial consultation to the final delivery, the entire process was handled with remarkable efficiency. The client felt that their needs were thoroughly understood and met at every stage. The team’s ability to deliver a high-quality product within the agreed timeline was particularly appreciated. Moreover, the client highlighted that the support provided after the project’s completion was just as commendable, ensuring that any post-delivery issues were resolved swiftly and effectively.',

		// Short answers
		'Impressive work. No complaints.',
		'On time. Perfect outcome.',
		'Flow is good.',
	]

	return sentences[getRandomIntInclusive(0, sentences.length - 1)]
}


export function getReviewTime() {
	const today = new Date()
	const randomDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - Math.floor(Math.random() * 365))

	const timeDiff = Math.abs(today - randomDate)
	const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))

	if (daysDiff < 7) {
		return `${daysDiff} days`
	} else if (daysDiff < 30) {
		return `${Math.ceil(daysDiff / 7)} weeks`
	} else {
		return `${Math.ceil(daysDiff / 30)} months`
	}
}


export function getSellerResponse() {
	// const willResponse = getRandomBoolean() // temp
	const willResponse = true
	if (!willResponse) return

	const sentences = ["We're thrilled to have you on board! We'll be in touch soon with more details.", "Thank you for choosing us! We'll be in touch with you shortly to discuss your requirements.", "We're excited to have you on board! We'll be in touch soon with more details.", "We're thrilled to have you on board! We'll be in touch soon with more details.", "Thank you for choosing us! We'll be in touch with you shortly to discuss your requirements."]

	return sentences[getRandomIntInclusive(0, sentences.length - 1)]
}

export function getAboutGig() {
	const abouts = [
		'This gig offers top-notch services tailored to meet your specific needs. Our team is dedicated to delivering high-quality results that exceed your expectations.',
		'With years of experience in the industry, we bring a wealth of knowledge and expertise to every project. You can trust us to handle your requirements with professionalism.',
		'We prioritize customer satisfaction above all else. Our goal is to ensure that you are completely happy with the final product, and we are committed to making any necessary adjustments.',
		'We understand the importance of deadlines. Our efficient workflow allows us to deliver your project quickly without compromising on quality.',
		'We offer competitive pricing for our services, ensuring that you receive great value for your investment. Quality service doesn’t have to break the bank!',
		'Every project is unique, and we take the time to understand your specific needs. Our tailored solutions are designed to fit your requirements perfectly.',
		'We believe in maintaining open lines of communication throughout the project. You will be updated regularly, and your feedback will always be valued.',
		'In addition to the primary gig offerings, we provide a range of supplementary services to enhance your experience and ensure all your needs are met.',
		'This gig is designed to offer services that are meticulously tailored to align with your unique needs and objectives. We understand that each project comes with its own set of challenges and requirements, and that’s why we take the time to get to know you and your business intimately. Our dedicated team is committed to delivering high-quality results that not only meet but exceed your expectations. From the initial consultation to the final delivery, every step of our process is crafted to ensure that your vision is brought to life with precision and care. Whether you’re looking for a one-time solution or ongoing support, we are here to provide you with the expertise and resources needed to achieve your goals. Our services are designed to be flexible and scalable, allowing us to adapt to your evolving needs over time. We pride ourselves on our ability to deliver results that are not just satisfactory but truly exceptional.',
		'With a deep reservoir of experience accumulated over many years in the industry, we bring a profound level of knowledge and expertise to every project we undertake. Our team consists of seasoned professionals who have honed their skills through countless successful projects across various domains. This wealth of experience allows us to anticipate potential challenges before they arise and implement solutions that are both innovative and effective. You can trust us to handle your requirements with the utmost professionalism and care. We don’t just execute tasks; we offer strategic insights that can help you achieve your long-term objectives. Our industry experience also means we stay ahead of the curve with the latest trends and technologies, ensuring that your project is always at the cutting edge of innovation. We are dedicated to continuous learning and adapting to the evolving landscape, so you can be confident that your project will benefit from the latest best practices and insights.',
		'Customer satisfaction is not just a priority for us—it’s the cornerstone of everything we do. We believe that the success of any project hinges on how well it meets the needs and expectations of our clients. That’s why we go the extra mile to ensure that you are completely satisfied with the final product. Our commitment to excellence means that we are always ready to make any necessary adjustments to achieve your desired outcome. We value your feedback and view it as an essential part of the creative process. By maintaining a close and collaborative relationship with you throughout the project, we are able to refine and perfect every detail, ensuring that the final result is something you can truly be proud of. Our dedication to your satisfaction doesn’t end with the delivery of the project; we are here to support you even after the work is complete, providing any additional assistance you may need to ensure long-term success.',
		'We recognize that time is of the essence in today’s fast-paced world. That’s why we have developed an efficient workflow that allows us to deliver your project quickly without ever compromising on quality. Our team is skilled in managing tight deadlines and complex schedules, ensuring that your project is completed on time and to the highest standard. We understand that delays can have significant implications, which is why we prioritize timely delivery as a key component of our service. From the moment we begin working on your project, we implement a structured process that includes regular progress updates and milestone reviews. This approach not only keeps the project on track but also allows for any necessary adjustments to be made in real time. Our commitment to efficiency is matched by our dedication to quality, ensuring that you receive a final product that is both timely and exceptional in every way.',
		'We believe that high-quality services should be accessible and affordable. That’s why we offer competitive pricing that provides great value for your investment. We understand that budget constraints are a reality for many clients, and we work diligently to ensure that our services deliver the best possible results without breaking the bank. Our pricing model is transparent, with no hidden fees or unexpected costs, so you can plan your project with confidence. We are committed to providing you with a service that balances cost and quality, ensuring that you receive maximum value for every dollar spent. In addition, we offer a range of packages and options that can be tailored to fit your specific budget and needs, allowing you to choose the level of service that best suits your project goals. Our goal is to make sure that you feel that every aspect of our service is worth the investment, from the initial consultation to the final delivery.',
	]
	return abouts[getRandomIntInclusive(0, abouts.length - 1)]
}


export function getRandomReview(rating) {
	const badReviews = [
		"This product is terrible.",
		"I wouldn't recommend it.",
		"Really bad experience.",
		"Very disappointing.",
		"It didn't work as expected.",
		"Waste of money.",
		"Poor quality, not worth it."
	];

	const goodReviews = [
		"It's pretty good!",
		"I enjoyed using this product.",
		"Would recommend to others.",
		"Solid performance for the price.",
		"Satisfied with my purchase.",
		"Met my expectations.",
		"Works well, no issues so far."
	];

	const bestReviews = [
		"This is the best product ever!",
		"Absolutely loved it!",
		"10/10, would buy again!",
		"Exceeded all my expectations.",
		"Top quality, worth every penny.",
		"Highly recommend to everyone!",
		"Couldn't be happier with this product."
	];

	switch (rating) {
		case 1:
		case 2:
			return badReviews[Math.floor(Math.random() * badReviews.length)];
		case 3:
		case 4:
			return goodReviews[Math.floor(Math.random() * goodReviews.length)];
		case 5:
			return bestReviews[Math.floor(Math.random() * bestReviews.length)];
		default:
			return "Invalid rating. Please provide a number between 1 and 5.";
	}
}


export function generateRandomUsername() {
	const adjectives = [
		"Swift", "Silent", "Fierce", "Mighty", "Brave", "Wild", "Clever",
		"Bold", "Fearless", "Loyal", "Sly", "Majestic", "Nimble",
		"Radiant", "Stealthy", "Vigilant", "Gallant", "Daring", "Epic",
		"Savage", "Serene", "Elusive", "Tenacious", "Vibrant"
	];

	const topics = [
		"Lion", "Tiger", "Eagle", "Wolf", "Panther", "Falcon",
		"Bear", "Shark", "Dragon", "Fox", "Raven", "Hawk",
		"Cobra", "Leopard", "Griffin", "Stag", "Rhino", "Bison",
		"Phoenix", "Serpent", "Owl", "Badger", "Jaguar", "Cheetah",
		"Warrior", "Knight", "Wizard", "Ninja", "Samurai", "Assassin",
		"Engineer", "Pilot", "Ranger", "Hunter", "Scholar", "Sage",
		"Viking", "Nomad", "Alchemist", "Mage", "Guardian", "Paladin",
		"Star", "Moon", "Blade", "Arrow", "Flame", "Storm", "Shadow"
	];

	const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
	const randomTopic = topics[Math.floor(Math.random() * topics.length)];
	const randomNumber = Math.floor(Math.random() * 1000);

	return `${randomAdjective}${randomTopic}${randomNumber}`;
}


