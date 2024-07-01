require('dotenv').config();

const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.static('dist'))

/*let notes = [
    {
      id: 1,
      content: "HTML is easy",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only JavaScript",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      important: true
    },
    {
      id: 4,
      content: "Test Note from backend",
      important: true
    }
  ]*/

  const requestLogger = (request, response, next) => {
    console.log('Method', request.method)
    console.log('Path: ', request.path)
    console.log('Body ', request.body)
    console.log('---');
    next()
  }
  app.use(express.json())
  app.use(requestLogger)

  const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }



  app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })

  /*app.get('/api/notes', (request, response) => {
    response.json(notes)
  })*/

  app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id);
    const note = notes.find(note => note.id === id)
    if(note){
      response.json(note)
    } else {
      response.status(404).send('<h1>Error: no note with this ID</h1>')
    }
  })

  const generateId = () => {
    const maxId = notes.length > 0
      ? Math.max(...notes.map(n => n.id))
      : 0
    return maxId + 1
  }
  app.post('/api/notes', (request, response) => {
    const body = request.body

    if (!body.content) {
      return response.status(400).json({ 
        error: 'content missing' 
      })
    }
  
    const note = {
      content: body.content,
      important: Boolean(body.important) || false,
      id: generateId(),
    }
  
    notes = notes.concat(note)

    response.json(note)
  })
  

  app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)
    response.status(204).end()

  })

  app.use(unknownEndpoint)

  
  const PORT = process.env.PORT || 3003
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })


// Mongoose definitions 

const mongoose = require('mongoose')

const password = process.argv[2]

// DO NOT SAVE YOUR PASSWORD TO GITHUB!!
const url = process.env.MONGODB_URL;
console.log(url);
mongoose.set('strictQuery',false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
})
