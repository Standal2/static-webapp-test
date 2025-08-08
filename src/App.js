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
  return <div> 
          <div className="card">
          Hello {value}
          <p>{msg}</p> 
          </div>;
}


export default App;
