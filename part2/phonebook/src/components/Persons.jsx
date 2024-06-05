const Persons = ({filteredPersons, handleDeleteButton}) => {
    return (
        <div>
        {filteredPersons.map(person => (
            <p key={person.name}>{person.name}: {person.number}
              &nbsp;<button type="button"
                            onClick={() => handleDeleteButton(person.id, person.name)}>delete</button>
            </p>
          ))}

        </div>
    )
}

export default Persons