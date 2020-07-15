import React from "react";
import Radium from "radium";

const cockpit = (props) => {
  const style = {
    backgroundColor: "Green",
    color: "white",
    margin: "10px",
    font: "inherit",
    border: "1px solid black",
    padding: "10px",
    marginBottom: "16px",
    ":hover": {
      backgroundColor: "darkgreen",
    },
  };

  const classes = [];

  if (props.persons.length <= 2) {
    classes.push("red");
  }

  if (props.persons.length <= 1) {
    classes.push("bold");
  }

  if (props.showPersons) {
    style.backgroundColor = "Red";
    style[":hover"] = {
      backgroundColor: "salmon",
    };
  }
  return (
    <div>
      <h1>Hello World</h1>
      <p className={classes.join(" ")}>This is working!!</p>
      <button style={style} onClick={props.click}>
        Toggle Persons!
      </button>
    </div>
  );
};

export default Radium(cockpit);
