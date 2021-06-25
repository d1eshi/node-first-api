require('./mongodb.js')
const express = require('express')
const app = express()
const cors = require('cors')
const { getFavs, deleteFav, postFav } = require('./routes.js')

app.use(cors())
// Parsear el contenido al recibirlo por method:'POST'
app.use(express.json())

app.get('/', function (req, res) {
	res.send('<h1>Bienvenidx a la API</h1>')
})

app.get('/fav', getFavs)
app.delete('/fav/:id', deleteFav)
app.post('/favs', postFav)

// Error 404
app.use((req, res) => {
	res.status(404).json({
		error: 'Not Found',
	})
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
