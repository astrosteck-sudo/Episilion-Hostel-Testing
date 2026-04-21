import { useState } from "react";
import "./styles.css";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="app">
      
      {/* Sidebar */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-header">
          <button className="close-btn" onClick={() => setOpen(false)}>
            ✕
          </button>
          <h2>Chats</h2>
        </div>

        <div className="sidebar-content">
          <p>Chat 1</p>
          <p>Chat 2</p>
          <p>Chat 3</p>
        </div>
      </div>

      {/* Main Content */}
      <div className={`main ${open ? "shift" : ""}`}>
        <div className="topbar">
          <button className="menu-btn" onClick={() => setOpen(true)}>
            ☰
          </button>
          <h1>Hostel Finder</h1>
        </div>

        <div className="content">
          <p>Your main app content goes here...</p>
        </div>
      </div>
    </div>
  );
}