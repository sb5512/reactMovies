import React, { Component } from "react";
import "./App.css";
import Counter from "./components/counter";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Counter />
      </main>
    );
  }
}
export default App;
