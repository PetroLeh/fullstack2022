
const Notification = ({ notification }) => {
    if (!notification) return null

    console.log(`notification info: ${notification.message} | ${notification.style}`);

    const messageStyle = {
        color: notification.style === 'error' ? 'red' : 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10    
    }

    return ( 
        <div style={messageStyle}>
            {notification.message}
        </div>
    )   
}

export default Notification