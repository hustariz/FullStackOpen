import {useState, useEffect} from 'react'
import axios from 'axios'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(false)

  const hook = () => {
    console.log('effect');
    axios
      .get('http://localhost:3001/notes')
      .then(response =>{
        console.log('promise fullfilled');
        setNotes(response.data)
      })
  }
  useEffect(hook, [])

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    }

    axios
      .post('http://localhost:3001/notes', noteObject)
      .then(response => {
        setNotes(notes.concat(noteObject))
        setNewNote('')
      })


  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const noteToShow = showAll ? notes : notes.filter(note => note.important)

  const toggleImportanceOf = (id) => {
    console.log(`importance of ${id} need to be toggled`);
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important : !note.important}

    axios
      .put(url, changedNote)
      .then(response => {
        setNotes(notes.map(n => n.id !== id ? n : response.data))
      })

  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>      
        {noteToShow.map(note => (
          <Note
           key={note.id}
           note = {note}
           toggleImportance={() => toggleImportanceOf(note.id)}/>
      ))}
      </ul>
      <form onSubmit={addNote}>
        <input
         value={newNote}
         onChange={handleNoteChange}
         />
        <button type ="submit">save</button>
      </form>

    </div>
  )
}

export default App