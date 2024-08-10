const notesRouter = require('express').Router()
const Blog = require('../models/blog')

notesRouter.get('/', (request, response) => {
    Blog.find({}).then(notes => {
      response.json(notes)
    })
  })

  
  notesRouter.post('/', (request, response) => {
    const blog = new Blog(request.body)
  
    blog
      .save()
      .then(result => {
        response.status(201).json(result)
      })
  })


  
module.exports = notesRouter

