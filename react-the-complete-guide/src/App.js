import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'manu', age: 29 },
      { name: 'stephanie', age: 26 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) => {
    // console.log('was clicked');
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'manu', age: 29 },
        { name: 'stephanie', age: 27 }
      ],
      showPersons: false,
    })
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

    return (
      <div className="App" >
        <h1>Hi, I'm a react app</h1>
        <p>this is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}
        >switch Name</button>
        {this.state.showPersons === true ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Max!')}
              changed={this.nameChangeHandler}>My hobby is racing</Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age} />
          </div> : null
        }
      </div>
    );
  }

}

export default App;



