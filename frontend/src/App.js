import React, { useState, useEffect } from 'react';

interface Response{
  message: string;
}

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetchData();
  }, []);
    const fetchData = async () => {
      const result = await fetch('/api/data');
      const resultData = await result.json();
      setData(resultData);
    };
  return (
    <div>
      <h1>Hello from React!</h1>
      <p>Data from Flask: {data}</p>
    </div>
  );
}

export default App;
