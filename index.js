const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (request, response) => {
	response.send('Hello, World!')
})

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
