import Person from './Person'

const Persons = ({ persons, deletePerson }) =>
    persons.map(person =>
        <Person key={person.name} person={person} deletePerson={() => deletePerson(person.id)}/>
    )

export default Persons