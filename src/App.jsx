import { useState } from 'react'
import './App.css'

function App() {
  const [messages, setMessages] = useState([
    { sender: 'assistant', text: 'Hello! How can I assist you today?' },
  ])
  const [input, setInput] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    setMessages([...messages, { sender: 'user', text: input }])
    setInput('')
  }

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <header className="header">
        <h1>ChatGPT Clone</h1>
        <button
          className="mode-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? 'Light mode' : 'Dark mode'}
        </button>
      </header>
      <main className="chat-window">
        {messages.map((m, i) => (
          <div key={i} className={`message ${m.sender}`}>
            {m.text}
          </div>
        ))}
      </main>
      <form onSubmit={handleSubmit} className="input-area">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          aria-label="chat input"
        />
      </form>
    </div>
  )
}

export default App

