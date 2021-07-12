import React from 'react';
import './App.css';
import fetchGraphQL from './fetchGraphQL';

const { useState, useEffect } = React;

function App() {
  const [name, setName] = useState(null);

  useEffect(() => {
    let isMounted = true;
    fetchGraphQL().then(response => {
      if (!isMounted) {
        return;
      }
      //const data = response.data;
      //console.log(data);
      //setName(data.repository.name);
    }).catch(error => {
      console.error(error);
    });

    return () => {
      isMounted = false;
    };
  }, [fetchGraphQL]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
        </p>
      </header>
    </div>
  );
}

export default App;