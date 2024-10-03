import { useState } from 'react';
import React from 'react';
import FeedbackForm from './components/FeedbackForm';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='contain'>
        <div className='barra'>
          <h1 className='title'>Tell Us What You Think</h1>
        </div>
        <FeedbackForm />
      </div>
  )
}

export default App
