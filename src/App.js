import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 3 },
      { id: 3, value: 0 },
      { id: 4, value: 4 },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="testcontainer">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }

  handleReset = () => {
    const tempCounters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ tempCounters });
  };

  handleIncrement = (counter) => {
    const counters = this.state.counters;
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
}

export default App;
