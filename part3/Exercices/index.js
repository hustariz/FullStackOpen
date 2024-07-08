require('dotenv').config();
const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const Contact = require('./models/contact')

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())

morgan.token('body', (req) => JSON.stringify(req.body))

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))


/*let contacts = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]*/

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })
  
/*app.get('/api/contacts', (request, response) => {
    response.json(contacts)
  })*/
    app.get('/api/contacts', (request, response) => {
      Contact.find({}).then(contacts => {
        response.json(contacts)
      })
    })

app.get('/info', (request, response) => {
    const date = new Date()
    const nbContact = contacts.length
    response.send(`<p>Phonebook has info for ${nbContact} people</p> ${date}`)
})

app.get('/api/contacts/:id', (request, response) => {
    const id = Number(request.params.id)
    const contact = contacts.find(contact => contact.id === id)

    if (contact) {
        response.json(contact)
      } else {
        response.status(404).end()
      }
  })

app.delete('/api/contacts/:id', (request, response, next) => {
    Contact.findByIdAndDelete(request.params.id)
      .then(result => {
        response.status(204).end()
      })
      .catch(error => next(error))
  })

app.put('/api/contacts/:id', (request, response, next) => {
  const body = request.body

  const contact = {
    name: body.name,
    number: body.number
  }

  Contact.findByIdAndUpdate(request.params.id, contact, {new: true})
    .then(updatedContact => {
      response.json(updatedContact)
    })
    .catch(error => next(error))
})

const generateId = () => {
    const maxId = contacts.length > 0
      ? Math.max(...contacts.map(n => n.id))
      : 0
    return maxId + 1
  } // Why not do the same as in the course to not generate duplicate?

app.post('/api/contacts', (request, response) => {
    const body = request.body

    if (body.name === undefined) {
      return response.status(400).json({ 
        error: 'content missing' 
      })
    }

    /*const nameExists = contacts.some(contact => contact.name == body.name)

    if (nameExists) {
      return response.status(400).json({ 
        error: 'name must be unique' 
      })
    }*/
  
    const contact = new Contact({
      name: body.name,
      number: body.number
    })
    contact.save().then(savedContact => {
      response.json(savedContact)
    })
  })

  const PORT = process.env.PORT || 3002
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
  const errorHandler = (error, request, response, next) => {

    if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
    } 
    next(error)
  }
  // this has to be the last loaded middleware, also all the routes should be registered before this!
  app.use(errorHandler)