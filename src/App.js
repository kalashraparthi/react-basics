import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Kalash", age: 23 },
      { name: "Anuj", age: 22 },
      { name: "Aishwarya", age: 20 }
    ]
  };

  switchName = () => {
    this.setState({
      persons: [
        { name: "Kalash", age: 24 },
        { name: "Anuj", age: 22 },
        { name: "Aishwarya", age: 20 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <button onClick={this.switchName}>Click Me!</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
