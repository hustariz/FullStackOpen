import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterSearch, setFilterSearch] = useState('')

  const addContact = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }

    if (persons.some(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(nameObject))
    }

    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setFilterSearch(event.target.value)
  }
  const filteredPersons = persons.filter(person =>
     person.name.toLowerCase().includes(filterSearch.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <p>Filter contact:  </p>
        <input
          value={filterSearch}
          onChange={handleFilterChange}
        />
      </div>
      <h2>Add a new contact</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input 
                  value={newName}
                  onChange={handleNameChange}
                />
        </div>
        <div>
          number: <input
                    value={newNumber}
                    onChange={handleNumberChange}
                    />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Contacts</h2>
      {filteredPersons.map(person => (
        <p key={person.name}>{person.name}: {person.number}</p>
      ))}
    </div>
  )
}

export default App