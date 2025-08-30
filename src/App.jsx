import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! How can I help you today?' },
  ])
  const [input, setInput] = useState('')
  const chatWindowRef = useRef(null)

  useEffect(() => {
    const el = chatWindowRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages])

  const sendMessage = () => {
    const text = input.trim()
    if (!text) return
    setMessages((prev) => [...prev, { role: 'user', content: text }])
    setInput('')

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'This is a placeholder response.' },
      ])
    }, 500)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-header">
          <button className="new-chat">
            <i className="fa fa-plus"></i> New Chat
          </button>
        </div>
        <nav className="chat-history">
          <div className="history-item active">Sample conversation</div>
          <div className="history-item">Another chat</div>
        </nav>
        <div className="sidebar-footer">
          <button className="footer-btn">
            <i className="fa fa-gear"></i> Settings
          </button>
          <button className="footer-btn">
            <i className="fa fa-right-from-bracket"></i> Log out
          </button>
        </div>
      </aside>

      <main className="main">
        <header className="top-bar">
          <div className="title">ChatGPT</div>
          <div className="top-bar-actions">
            <i className="fa fa-lightbulb"></i>
            <i className="fa fa-user"></i>
          </div>
        </header>
        <section className="chat-window" ref={chatWindowRef}>
          {messages.map((m, i) => (
            <div key={i} className={`message ${m.role}`}>
              <div className="avatar">
                {m.role === 'assistant' ? 'GPT' : 'U'}
              </div>
              <div className="bubble">{m.content}</div>
            </div>
          ))}
        </section>
        <footer className="composer">
          <textarea
            id="prompt"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Send a message..."
            rows={1}
          ></textarea>
          <button id="send-btn" onClick={sendMessage}>
            <i className="fa fa-paper-plane"></i>
          </button>
        </footer>
      </main>
    </div>
  )
}

export default App

