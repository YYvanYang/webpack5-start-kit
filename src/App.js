import React, { useState } from 'react';

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
      {message}
    </div>
  );
}

export default App;
