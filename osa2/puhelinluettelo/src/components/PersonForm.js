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

export default PersonForm