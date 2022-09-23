import { useState, useEffect } from "react";

import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personService from './service/persons'

const Filter = ({ filter, handle }) =>
    <div>filter shown with <input value={filter} onChange={handle} />
    </div>

const App = () => {

    const [persons, setPersons] = useState([])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    useEffect(() => {
        personService
            .getAll()
            .then(allPersons => {
                setPersons(allPersons)
            })
    }, [])

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    const deletePerson = id => {
        const name = persons
                    .find(person => person.id === id)
                    .name
        
        if (window.confirm(`Delete ${name}?`)) {
        
        console.log(`delete person with id ${id}`);
        personService
        .remove(id)
        .then(() => {
            setPersons(persons.filter(person => person.id !== id))
        })

        }
    }

    const addNewPerson = (event) => {
        event.preventDefault()
        const newPerson = {
            name: newName,
            number: newNumber
        }
        if (persons.find(person => person.name === newName)) {
            if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
                const id = persons.find(person => person.name === newName).id
                personService
                .update(id, newPerson)
                .then(newPerson => {
                    setPersons(persons
                        .map(person => person.id !== id ? person : newPerson))
                })
            }
            setNewName('')
            setNewNumber('')
            return
        }

        personService
        .add(newPerson)
        .then(returnedPerson => 
            setPersons(persons.concat(returnedPerson))
        )
        setNewName('')
        setNewNumber('')

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
            <Persons persons={filterPersons} deletePerson={deletePerson} />
        </div>
    )
}

export default App;
