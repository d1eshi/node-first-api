let Favs = [
	{
		id: 2,
		username: 'Camilucha',
		favs: ['d1eshi', 'coke'],
	},
]
const mongoose = require('mongoose')
const Fav = require('./models/Fav.js')

const createId = () => {
	const ids = Favs.map(fav => fav.id)
	const maxId = Math.max(...ids)
	return maxId + 1
}

// GET
exports.getFavs = (req, res) => {
	Fav.find({}).then(favs => {
		res.json(favs)
		mongoose.connection.close()
	})
}

// DELETE
exports.deleteFav = (req, res) => {
	const id = Number(req.params.id)
	Favs = Favs.filter(fav => fav.id !== id)
	console.log(`Delete ${id}`)
	res.status(204).end()
}

// POST
exports.postFav = (req, res) => {
	const fav = req.body
	const newFav = {
		id: createId(),
		username: fav.username,
		favs: fav.favs,
	}
	Favs = [...Favs, newFav]

	res.json(newFav)
}
