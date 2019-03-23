import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {

  // assing a value - js object 
  // reserved word
  state = {
    // person array is again an array of object
      // data source - real application this is populated from server
    persons:[
      {id: 'jkfbnjh', name: 'Max', age:28},
      {id: 'xcdnxzc', name:'Manu', age:29},
      {id: 'sdjsdld', name:'Stephanie', age:26}
    ],
    showPersons: false
  }


  deletePersonHandler = (index) => {
    // fetch all person
    // obj and array are ref type - pointer to original state
    // const persons = this.state.persons;
    // bad practice 
    // new version of person array - splice 1 element
    // persons.splice(index, 1);
    // this.setState({persons:persons});
    // good practice - create a copy 
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons:persons});
  }

  nameChangedHandler = (event, id) => {
    // this will hold the index of a person in which id are equal
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // const person = Object.assign({}, this.state.persons[personIndex])
    // get the person - mutate it/copy of it to change the name
    const person = {
      ...this.state.persons[personIndex]
    };
    // set name to current value in input box
    person.name = event.target.value;
    // create a new persons - updated person
    const persons = [...this.state.persons];
    // copy of persons will have a new copy of person that was changed
    // other are untouched
    // always work with the copy
    persons[personIndex] = person;
    // set the state
    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    this.setState({showPersons:!this.state.showPersons})
  }

  // imp: this.switchNameHandler - do not put () 
  // because this will execute immediately
  // when the react renders the DOM
  // while using class component, this is used to refer to a class
  // () => this.switchOtherNameHandler('Joke') could be inefficient 
  // so use bind instead
  render() {
    // default person value
    let persons = null;
    // check for show persons
    if(this.state.showPersons) {
      persons = (
        <div>
          {
              // for each person - do not use index as an id
              // add key so that react efficiently update values
              this.state.persons.map((person, index)=> {
                return <Person click={() => this.deletePersonHandler(index)}
                               name={person.name} 
                               age={person.age} 
                               key={person.id}
                               changed={(event) => this.nameChangedHandler(event, person.id)}
                        />
              })
          }
        </div>
      );
    }
    return (
      <div className="App">
        <button onClick={this.togglePersonHandler} className="Button">Toggle Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
