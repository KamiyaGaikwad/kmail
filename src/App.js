import './App.css';
import React from 'react';
import {Routes,Route,NavLink} from "react-router-dom";
import { Inbox } from './pages/Inbox';
import { Spam } from './pages/Spam';
import { Trash } from './pages/Trash';
import { ErrorPage } from './pages/ErrorPage';
import { IndividualMail } from './pages/IndividualMail';

function App() {
  const getActiveStyles = ({isActive}) =>({
    color:isActive?'red':'black',
    fontWeight:isActive?'600':'400',
    borderRight:isActive?'4px solid #313134':'none'
  });
  return (
    <div className="App">
      <h1>Kamiya's Mail Box</h1>
      <div className='App-container'>
        <header className="App-header">
          <nav className='navbar'>
          <NavLink to="/" style={getActiveStyles}>Inbox</NavLink>
          <NavLink to="/spam" style={getActiveStyles}>Spam</NavLink>
          <NavLink to="/trash" style={getActiveStyles}>Trash</NavLink>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Inbox />} />
          <Route path="/spam" element={<Spam />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/inbox/:id" element={<IndividualMail />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
