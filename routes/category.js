const { Router } = require('express')
const fs = require('fs')
const path = require('path')
const router = Router()

function getCategoryData (data, slug) {
	const idx = data.findIndex(item => item.slug === slug)
	if (idx > -1) {
		const { id, name, slug, description, image, courses } = data[idx]
		return {
			id,
			name,
			slug,
			description,
			image,
			courses: courses.map(({ id, name, image, slug }) => ({ id, name, image, slug }))
		}
	}
	return false
}

function getCourseData (data, slug, secondSlug) {
	const idx = data.findIndex(item => item.slug === slug)
	if (idx > -1) {
		const courseIdx = data[idx].courses.findIndex(item => item.slug === secondSlug)
		if (courseIdx > -1) {
			const { id, name, image, slug, price, description } = data[idx].courses[courseIdx]
			return {
				id,
				name,
				slug,
				image,
				price,
				description
			}
		}
		return false
	}
	return false
}

router.get('/:slug', (request, response) => {
	const { slug } = request.params
	if (slug) {
		const data = JSON.parse(
			fs.readFileSync(
				path.join(
					__dirname,
					'../data/data.json'
				)
			)
		)

		const categoryData = getCategoryData(data, slug)

		if (categoryData) {
			response.send({
				status: 200,
				data: categoryData
			})
		} else {
			response.send({
				status: 400,
				message: 'Wrong slug'
			})
		}
	} else {
		response.send({
			status: 400,
			message: 'Empty slug'
		})
	}
})

router.get('/:slug/:secondSlug', (request, response) => {
	const { slug, secondSlug } = request.params

	if (slug && secondSlug) {
		const data = JSON.parse(
			fs.readFileSync(
				path.join(
					__dirname,
					'../data/data.json'
				)
			)
		)

		const courseData = getCourseData(data, slug, secondSlug)

		if (courseData) {
			response.send({
				status: 200,
				data: courseData
			})
		} else {
			response.send({
				status: 400,
				message: 'Wrong slugs'
			})
		}
	} else {
		response.send({
			status: 400,
			message: 'Empty slugs'
		})
	}
})

module.exports = router
