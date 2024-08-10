const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const notesRouter = require('./controllers/blogs')
const middleware = require('./utils/middleware')
const {info, error} = require('./utils/logger')
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const url = config.MONGODB_URL

info('MONGODB_URL: ', url)  // Debug log to check if URL is read correctly

info('Connecting to: ', url)

mongoose.connect(url)
  .then(() => {
    info('Connected to MongoDB')
  })
  .catch((error) => {
    error('Error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/blogs', notesRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app