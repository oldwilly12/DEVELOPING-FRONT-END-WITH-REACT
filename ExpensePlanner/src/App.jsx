import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ConferenceExpense from './components/ConferenceExpense';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap desde node_modules
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ConferenceExpense" element={<ConferenceExpense/>} />
      </Routes>
   </Router>
  )
}

export default App
