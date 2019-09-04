const mongoose = require('mongoose')
mongoose.Promise = global.Promise
//mongodb+srv://raj:<password>@cluster0-x6qsk.mongodb.net/test?retryWrites=true&w=majority
const CONNECTION_URI = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/notes-app-april'
mongoose.connect(CONNECTION_URI, { useNewUrlParser: true })
    .then(() => {
        console.log('connected to db')
    })
    .catch((err) => {
        console.log('error connecting to DB', err)
    })

module.exports = mongoose