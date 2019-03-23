import React, {useState} from 'react';
import Person from './Person/Person';

const main = () => {
    // to use state - you pass initial state 
    // returns an array with exactly two elements and always
    // first element, will always be our current state
    // second element, always be a function that allows us to update this state
    // so that it re-renders the component
    // second function does not merge to the old state
    // rather it makes a copy of it
    const [currentPersonState, setPersonState] =  useState({
        persons:[
            {name: 'Max', age:28},
            {name:'Manu', age:29},
            {name:'Stephanie', age:26}
          ]
    });

    const [currentOtherState, setOtherState] = useState('Some other state.');

    console.log(currentPersonState,currentOtherState);

    // can have function inside function
    const switchNameHandler = () => {
        setPersonState({
          persons: [
            {name: 'Min', age:24},
            {name:'Menu', age:25},
            {name:'Steph', age:22}
          ]
        })
      }

    return (
        <div>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={currentPersonState.persons[0].name} 
                age={currentPersonState.persons[0].age} />
            <Person name={currentPersonState.persons[1].name} 
                  age={currentPersonState.persons[1].age}>
                My Hobbies: Racing
            </Person>
          <Person name={currentPersonState.persons[2].name} 
                  age={currentPersonState.persons[2].age} />
        </div>
    )
};


export default main;