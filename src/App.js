import './App.css';
import React from 'react';
import {Routes,Route} from "react-router-dom";
import { Inbox } from './pages/Inbox';
import { Spam } from './pages/Spam';
import { Trash } from './pages/Trash';
import { ErrorPage } from './pages/ErrorPage';
import { IndividualMail } from './pages/IndividualMail';
import {NavBar} from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <h1>Kamiya's Mail Box</h1>
      <div className='App-container'>
        <header className="App-header">
          <NavBar />
        </header>
        <Routes>
          <Route path="/" element={<Inbox />} />
          <Route path="/spam" element={<Spam />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/inbox/:mailid" element={<IndividualMail />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
