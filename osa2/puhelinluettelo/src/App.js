import { useState } from "react";

const Person = ({ person }) => <h4>{person.name} {person.number}</h4>

const Persons = ({ persons }) =>
    persons.map(person =>
        <Person key={person.name} person={person} />
    )

const Filter = ({ filter, handle }) =>
    <div>filter shown with <input value={filter} onChange={handle} />
    </div>


const PersonForm = (props) => {

    const { newName, handleNameChange,
        newNumber, handleNumberChange, addNewPerson } = props

    return (
        <form>
            <div>
                name: <input value={newName} onChange={handleNameChange} />
                <br />
                number: <input value={newNumber} onChange={handleNumberChange} />
            </div>
            <div>
                <button type="submit" onClick={addNewPerson}>add</button>
            </div>
        </form>
    )
}


const App = () => {

    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ]
    )

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    const addNewPerson = (event) => {
        event.preventDefault()
        const newPerson = {
            name: newName,
            number: newNumber
        }
        if (persons.find(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)
            return
        }
        setNewName('')
        setNewNumber('')
        setPersons(persons.concat(newPerson))
    }

    const filterPersons =
        persons.filter(person =>
            person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filter={filter} handle={handleFilterChange} />
            <h2>Add new</h2>
            <PersonForm newName={newName} handleNameChange={handleNameChange}
                newNumber={newNumber} handleNumberChange={handleNumberChange}
                addNewPerson={addNewPerson} />

            <h2>Numbers</h2>
            <Persons persons={filterPersons} />
        </div>
    )
}

export default App;