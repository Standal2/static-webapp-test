import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMsg(data.message))
      .catch(console.error);
  }, []);
  const value = 'World';
  return (
    <div className="card">
      <h1>Hello {value}</h1>
      <p>{msg}</p> 
    </div>)
  };


export default App;
