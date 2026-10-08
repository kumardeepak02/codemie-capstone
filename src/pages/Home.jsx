import React, { useState } from 'react'

function Home() {
  const [count, setCount] = useState(0)
  const [textInput, setTextInput] = useState("")

  return (
    <div className="home-page">
      <h1>Interactive UI Dashboard</h1>
      <p>Welcome to your newly structured React Vite Capstone app!</p>

      <div className="card">
        <h3>Counter Feature</h3>
        <p>Current Count: <strong>{count}</strong></p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>Decrement</button>
      </div>

      <div className="card" style={{ marginTop: '20px' }}>
        <h3>Live Input State</h3>
        <input 
          type="text" 
          placeholder="Type something here..." 
          value={textInput} 
          onChange={(e) => setTextInput(e.target.value)}
          style={{ padding: '8px', width: '250px', fontSize: '14px' }}
        />
        <p>You typed: <strong>{textInput || "(nothing yet)"}</strong></p>
      </div>
    </div>
  )
}

export default Home