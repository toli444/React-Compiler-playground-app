/* eslint-disable react/prop-types */
import { useState } from 'react'
import './App.css'

function Button({ text, onClick }) {
    console.log('re-rendered: ', text);
    return <button type="button" onClick={onClick}>{text}</button>
}

function App() {
    const [count, setCount] = useState(0);

    return <>
        <Button text="+" onClick={() => setCount(count + 1)} />
        <Button text="-" onClick={() => setCount(c => c - 1)} />
        <span>Count: {count}</span>
    </>
}

export default App
