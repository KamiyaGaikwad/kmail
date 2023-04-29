import './App.css';
import React from 'react';
import {Routes,Route,NavLink} from "react-router-dom";
import { Inbox } from './pages/Inbox';
import { Spam } from './pages/Spam';
import { Trash } from './pages/Trash';

function App() {
  return (
    <div className="App">
      <h1>Kamiya's Mail Box</h1>
      <header className="App-header">
        <nav>
          <NavLink to="/">Inbox</NavLink>
          <NavLink to="/spam">Spam</NavLink>
          <NavLink to="/trash">Trash</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Inbox />} />
          <Route path="/spam" element={<Spam />} />
          <Route path="/trash" element={<Trash />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
