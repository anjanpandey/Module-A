import React from 'react';
import './Person.css';

const style = {
    padding:'10px',
    border: '1px solid blue',
    borderRadius:'0.5em'
}
// if state or props changes, it updates the existing dom
const Person =  (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" 
                   value={props.name} 
                   onChange={props.changed}
                   style={style}
            />
        </div>
    )
};


export default Person;