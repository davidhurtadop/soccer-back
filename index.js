const express = require('express')
const users = require('./routers/users')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('hello from simple server :)')
})

app.use('/api/users', users)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})