const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const nameInput = process.argv[3]
const numberInput = process.argv[4]

const url =
  `mongodb+srv://hastarus:${password}@cluster0.stb8kpd.mongodb.net/phonebook?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const contactSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Contact = mongoose.model('Contact', contactSchema)

if (numberInput && nameInput){
  const contact = new Contact({
    name: nameInput,
    number: numberInput,
  })
  contact.save().then(result => {
    console.log('Added', nameInput, ' ', numberInput, ' to phonebook')
    mongoose.connection.close()
  })
}else{
  Contact.find({}).then(result => {
    result.forEach(contact => {
      console.log(contact)
    })
    mongoose.connection.close()
  })
}





