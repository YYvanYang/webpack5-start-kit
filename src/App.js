import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState();
  useEffect(() => {
    async function getMessage() {
      const _ = await import('./_');
      const message = _.join(['Hello', 'World'], ' ');
      setMessage(message);
    }
    getMessage();
  }, []);
  return (
    <div>
      <h1>Hello World</h1>
      {message}
    </div>
  );
}

export default App;
