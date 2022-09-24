
const Notification = ({ message }) => {

    if (!message) return null

    const neutralStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10    
    }

    return ( 
        <div style={neutralStyle}>
            {message}
        </div>
    )   
}

export default Notification