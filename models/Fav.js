const { Schema, model } = require('mongoose')

const favSchema = new Schema({
	username: String,
	favs: Array,
})

favSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id
		delete returnedObject._id
		delete returnedObject.__v
	},
})

const Fav = new model('Fav', favSchema)
module.exports = Fav
