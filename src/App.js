import React, { Component } from "react";
import "./App.css";
import TextEditor from "./components/textEditor";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Customizable Text Editor</h1>
          <TextEditor />
        </div>
      </div>
    );
  }
}

export default App;
