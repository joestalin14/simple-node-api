const express = require('express')
const path = require('path')
const cors = require('cors')

const categoriesRoutes = require('./routes/categories')
const categoryRoutes = require('./routes/category')

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (request, response) => {
	response.send('Hello, World!')
})

app.use('/categories', categoriesRoutes)
app.use('/category', categoryRoutes)
app.use('/public', express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3030

function start () {
	try {
		app.listen(PORT, () => {
			console.log(`Server is running on http://localhost:${PORT}`)
		})
	} catch (error) {
		console.error(error)
	}
}

start()
