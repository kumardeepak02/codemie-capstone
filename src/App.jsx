import React, { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'

function App() {
  const [appName] = useState("Codemie Capstone Project");

  return (
    <div className="app-container">
      <Header title={appName} />
      <main className="main-content">
        <Home />
      </main>
    </div>
  )
}

export default App