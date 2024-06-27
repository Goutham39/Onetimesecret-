import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [message, setMessage] = useState('');
  const [link, setLink] = useState('');

  const submitSecret = async () => {
    const response = await axios.post('/secret', { message });
    setLink(response.data.link);
  };

  return (
    <div>
      <h1>One-Time Secret App</h1>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={submitSecret}>Submit</button>
      {link && <p>Secret Link: <a href={link}>{link}</a></p>}
    </div>
  );
};

export default App;
