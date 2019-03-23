import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {

  // assing a value - js object 
  // reserved word
  state = {
    // person array is again an array of object
    persons:[
      {name: 'Max', age:28},
      {name:'Manu', age:29},
      {name:'Stephanie', age:26}
    ]
  }

  // component object has set state method that allows user to update the state
  // takes object as an argument
  // get state you want to change
  // update the value
  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: 'Min', age:24},
        {name:'Menu', age:25},
        {name:'Steph', age:22}
      ]
    })
  }

  switchOtherNameHandler = newName => {
    this.setState({
      persons: [
        {name: 'Min', age:24},
        {name:'Menu', age:25},
        {name:newName, age:22}
      ]
    })
  }

  nameChangedHandler = event => {
    this.setState({
      persons: [
        {name: event.target.value, age:24},
        {name: 'Menu', age:25},
        {name:'Stephanie', age:22}
      ]
    })
  }

  // imp: this.switchNameHandler - do not put () 
  // because this will execute immediately
  // when the react renders the DOM
  // while using class component, this is used to refer to a class
  // () => this.switchOtherNameHandler('Joke') could be inefficient 
  // so use bind instead
  render() {
    return (
      <div className="App">
      <button onClick={() => this.switchOtherNameHandler('Joke')} className="Button">Switch Name</button>
      <Person name={this.state.persons[0].name} 
              age={this.state.persons[0].age} 
              changed={this.nameChangedHandler}/>
        <Person name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler}>
          My Hobbies: Racing
        </Person>
        <Person name={this.state.persons[2].name} 
                age={this.state.persons[2].age} 
                click={this.switchOtherNameHandler.bind(this, 'Rossie')}/>
      </div>
    );
  }
}

export default App;
