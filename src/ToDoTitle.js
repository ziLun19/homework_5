import React from 'react';

function ToDoTitle() {
    return (
        <header style={headerStyle}>
            <h1>CGU Todo list</h1>
        </header>
    )
}

const headerStyle = {
    textAlign: 'center',
    padding: '10px'
}
export default ToDoTitle;