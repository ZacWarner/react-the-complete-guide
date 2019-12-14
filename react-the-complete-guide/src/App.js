import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'manu', age: 29 },
      { name: 'stephanie', age: 26 }
    ]

  }

  switchNameHandler = () => {
    // console.log('was clicked');
    this.setState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'manu', age: 29 },
        { name: 'stephanie', age: 27 }
      ]
    })
  }

  render() {
    return (
      <div className="App" >
        <h1>Hi, I'm a react app</h1>
        <p>this is really working!</p>
        <button onClick={this.switchNameHandler}>switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobby is racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
