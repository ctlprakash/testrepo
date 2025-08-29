import { useState } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <aside className="sidebar">
        <div className="logo">F2AI</div>
        <nav className="nav">
          <a href="#">All Chat</a>
          <a href="#">AI Image Generate</a>
          <a href="#">Manage Account</a>
          <a href="#">Help Centre</a>
        </nav>
        <div className="sidebar-footer">
          <button className="upgrade">Upgrade</button>
        </div>
      </aside>

      <section className="main">
        <header className="topbar">
          <div className="search-wrapper">
            <input type="text" placeholder="Search AI Tools" />
          </div>
          <div className="topbar-actions">
            <button
              className="mode-toggle"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <div className="avatar">N</div>
          </div>
        </header>

        <div className="content">
          <h2>Hello Neel</h2>
          <div className="cards">
            <div className="card examples">
              <h3>Examples</h3>
              <p>&quot;What would happen if all clocks suddenly stopped?&quot;</p>
            </div>
            <div className="card capabilities">
              <h3>Capabilities</h3>
              <p>Create a plot twist for a classic tale</p>
            </div>
            <div className="card limitations">
              <h3>Limitations</h3>
              <p>Make it based on facts I haven’t verified yet</p>
            </div>
          </div>
        </div>

        <form className="input-bar">
          <input
            type="text"
            placeholder="Can you explain more information about Atson agency PVT"/>
        </form>
      </section>
    </div>
  )
}

export default App

