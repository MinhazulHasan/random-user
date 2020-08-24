import React, { useEffect, useState } from 'react';
import './App.css';
import RandomUser from './components/RandomUser/RandomUser';

function App() {
  const [users, setUsers] = useState([]);
  useEffect( () => {
    fetch('https://randomuser.me/api/?results=3')
      .then(res => res.json())
      .then(data => setUsers(data.results))
  } ,[]);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.reload();
    }, 10000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <RandomUser users={users}></RandomUser>
      </header>
    </div>
  );
}

export default App;