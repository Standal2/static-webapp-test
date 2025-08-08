import React, { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMsg(data.message))
      .catch(console.error);
  }, []);
  const value = 'World';
  return <div>Hello {value} <p>{msg}</p> </div>;
}


export default App;
