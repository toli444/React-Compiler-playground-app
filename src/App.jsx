/* eslint-disable react/prop-types */
import { useState } from 'react'
import './App.css'

function Button({ id, children, onClick }) {
    console.log('re-rendered: ', id);

    return (
        <button type="button" onClick={onClick}>
            {children}
        </button>
    )
}

function App() {
    const [count, setCount] = useState(0);

    return (<>
        <Button id="+" onClick={() => setCount(count + 1)}>+</Button>
        <Button id="-" onClick={() => setCount(c => c - 1)}>-</Button>
        <span>Count: {count}</span>
    </>);
}

export default App
