import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <h1>Codemie Capstone Dashboard</h1>
      <p>Current Count: <strong>{count}</strong></p>
      <button onClick={() => setCount(count + 1)} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Increment
      </button>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)