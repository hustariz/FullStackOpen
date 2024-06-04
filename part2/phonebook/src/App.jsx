import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import contact from './services/contact'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterSearch, setFilterSearch] = useState('')


  useEffect(() => {
    contact
      .getAll()
      .then(contactList => {
        setPersons(contactList)
      })
  }, [])

  const addContact = (event) => {
    event.preventDefault()
    const newContact = {
      name: newName,
      number: newNumber
    }

    if (persons.some(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
    } else {
      contact
        .create(newContact)
        .then(returnedContact => {
          setPersons(persons.concat(returnedContact))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilterSearch(event.target.value)
  }

  const handleDeleteButton = (name) => {
    alert(`Delete ${name} ?`);
  }
  const filteredPersons = persons.filter(person =>
     person.name.toLowerCase().includes(filterSearch.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter filterSearch={filterSearch} onChange={handleFilterChange}/>
      <h2>Add a new contact</h2>
        <PersonForm newName={newName} newNumber={newNumber}
         onChangeName={handleNameChange} onChangeNumber={handleNumberChange}
         addContact={addContact}/>
      <h2>Contacts</h2>
        <Persons filteredPersons={filteredPersons} handleDeleteButton={handleDeleteButton} />
    </div>
  )
}

export default App