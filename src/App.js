import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState();

  async function getMessage() {
    const _ = await import('./_');
    const message = _.join(['Hello', 'World'], ' ');
    setMessage(message);
  }
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={() => getMessage()}>Get Message</button>
      <div className='container'>{message}</div>
    </div>
  );
}

export default App;
