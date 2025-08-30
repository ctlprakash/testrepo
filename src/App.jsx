import { useState } from 'react'
import './App.css'

function App() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hello! I'm a ChatGPT clone. How can I help?" },
  ])
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    setMessages([...messages, { role: 'user', content: input }])
    setInput('')
  }

  return (
    <div className="chatgpt-app">
      <aside className="sidebar">
        <button className="new-chat">+ New chat</button>
        <ul className="history">
          <li>Chat with Clone</li>
        </ul>
      </aside>
      <main className="chat">
        <div className="messages">
          {messages.map((m, i) => (
            <div key={i} className={`message ${m.role}`}>
              <div className="avatar">{m.role === 'user' ? 'U' : 'G'}</div>
              <div className="content">{m.content}</div>
            </div>
          ))}
        </div>
        <form className="input" onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Send a message..."
          />
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  )
}

export default App
