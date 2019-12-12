import React from 'react';
import Person from './Person/Person';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a react app</h1>
      <p>this is really working!</p>
      <Person name="Max" age="28" />
      <Person name="Manu" age="29">My hobby is racing</Person>
      <Person name="stephanie" age="26" />
    </div>
  );
}

export default App;
