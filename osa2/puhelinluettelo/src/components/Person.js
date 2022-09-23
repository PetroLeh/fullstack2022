
const Person = ({ person, deletePerson }) => 
    <h4>{person.name} {person.number} <button onClick={deletePerson}>delete</button></h4>

export default Person