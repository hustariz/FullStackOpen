const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', false);

const url = process.env.MONGODB_URL;

console.log('MONGODB_URL:', url);  // Debug log to check if URL is read correctly

console.log('Connecting to', url);

mongoose.connect(url)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error.message);
  });

const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    minLength: 5,
    required: true
  },
  important: Boolean
});

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

console.log('Note schema defined');  // Debug log to ensure schema is defined

module.exports = mongoose.model('Note', noteSchema);

console.log('Note model exported');  // Debug log to ensure model is exported
