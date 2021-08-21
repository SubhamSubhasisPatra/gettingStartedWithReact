import React, { Component } from "react";
// import Movies from "./components/counter";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 2 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    // console.log(counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    let counters = [];
    for (const val of this.state.counters) {
      val.value = 0;
      counters.push(val);
    }
    this.setState({ counters });
  };

  handelIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  render() {
    return (
      // <main className="container">
      //   <Movies />
      // </main>
      <React.Fragment>
        <NavBar
          totalCounter={this.state.counters
            .map((c) => c.value)
            .reduce((total, c) => total + parseInt(c))}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handelIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
