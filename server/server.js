const express = require('express')
const cors = require('cors')
const githubRoutes = require('./controllers/github')

const app = express()
app.use(cors())
app.use('/github', githubRoutes)

const PORT = 9000
app.listen(PORT,()=>console.log(`listening on port:${PORT}`))