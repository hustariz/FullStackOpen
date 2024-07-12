require('dotenv').config();
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URL
console.log('connecting to', url)

mongoose.connect(url)

  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message)
  })

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true
  },
  number: {
    type: String, 
    required: true,
    validate: {
      validator: function(v) {
        const parts = v.split('-');
        if (parts.length !== 2) return false;
        if (parts[0].length < 2 || parts[0].length > 3) return false;
        if (parts[1].length < 5) return false;
        return true;
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  }
})

contactSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Contact', contactSchema)