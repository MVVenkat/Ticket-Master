const express = require('express')
const app = express()
const mongoose = require('./config/database')
const router = require('./config/routes')
const cors = require('cors')
const path = require('path')

app.use(cors())

app.use(express.json())
app.use('/', router)




const port = process.env.PORT || 3001
app.use(express.static(path.join(__dirname, "client/build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"))
})


app.listen(port, () => {
    console.log('listening on port', port)
})