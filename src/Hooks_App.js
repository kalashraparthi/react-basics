import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const Hooks_App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Kalash", age: 23 },
      { name: "Anuj", age: 22 },
      { name: "Aishwarya", age: 20 }
    ]
  });

  const switchName = () => {
    setPersonsState({
      persons: [
        { name: "Kalash", age: 24 },
        { name: "Anuj", age: 22 },
        { name: "Aishwarya", age: 20 }
      ]
    });
  };

  return (
    <div className="Hooks_App">
      <h1>Hello World</h1>
      <button onClick={switchName}>Click Me!</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Poker
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default Hooks_App;
