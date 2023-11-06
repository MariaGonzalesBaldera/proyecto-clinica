import { useEffect, useState } from 'react';
import './App.css'
import Router from './router'

import axios from 'axios';

function App() {
  const [message, setMessage] = useState('conectado');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/index/api/v1/doctors')
      .then(({ data }) => {
        setMessage(data.message);
        console.log(message)
      });
  }, []);

  return (
    <>
      <Router/>
    </>
  )
}

export default App
