import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: 'asdf', name: 'Max', age: 28 },
      { id: "akjllkja", name: 'manu', age: 29 },
      { id: 'asdbjfa;bw', name: 'stephanie', age: 26 }
    ],
    otherState: 'some other value'
  };



  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'stephanie', age: 27 }
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: ' 1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
            />

          })}

        </div>
      )
    }

    return (
      <div className="App" >
        <h1>Hi, I'm a react app</h1>
        <p>this is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}
        >switch Name</button>

        {persons}

      </div>
    );
  }

}

export default App;



