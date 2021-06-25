const mongoose = require('mongoose')

const conecctionString =
	'mongodb+srv://d1eshi:1791011Sil@cluster0.xrklu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// conexión a mongodb
mongoose
	.connect(conecctionString, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	})
	.then(() => console.log('Data base connected'))
	.catch(errr => console.error(errr))
