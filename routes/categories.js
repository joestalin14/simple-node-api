const { Router } = require('express')
const fs = require('fs')
const path = require('path')
const router = Router()

function getCategoriesData (data) {
	return data.map((category) => {
		const { id, name, slug } = category
		return {
			id,
			name,
			slug,
			courses: category.courses.map(({ id, name, slug }) => ({ id, name, slug }))
		}
	})
}

router.get('/', (request, response) => {
	const data = JSON.parse(
		fs.readFileSync(
			path.join(
				__dirname,
				'../data/data.json'
			)
		)
	)
	const result = getCategoriesData(data)
	response.send({
		status: 200,
		data: result
	})
})

module.exports = router
