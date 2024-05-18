import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Disabling strict mode, to see actual number of our components re-renders
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)
