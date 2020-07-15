import React, { Component } from "react";
import "./App.css";
import Radium, { StyleRoot } from "radium";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: "101", name: "Kalash", age: 23 },
      { id: "102", name: "Anuj", age: 22 },
      { id: "103", name: "Aishwarya", age: 20 },
    ],
    showPersons: false,
  };

  deletePersonHandler = (index) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons,
    });
  };

  nameChange = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons,
    });
  };

  tooglePersonHandler = () => {
    const show = this.state.showPersons;
    this.setState({ showPersons: !show });
  };

  render() {
    let person = null;

    if (this.state.showPersons) {
      person = (
        <StyleRoot>
          <Persons
            persons={this.state.persons}
            click={this.deletePersonHandler}
            change={this.nameChange}
          />
        </StyleRoot>
      );
    }

    return (
      <div className="App">
        <Cockpit
          persons={this.state.persons}
          click={this.tooglePersonHandler}
          showPersons={this.state.showPersons}
        />
        {person}
      </div>
    );
  }
}

export default Radium(App);
