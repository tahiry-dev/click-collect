
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 4000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello express with nodemon!')
})

app.listen(PORT, () => {
    console.log(`express server up and running at http://localhost:${PORT}`)
})
