import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 2 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };
  render() {
    return (
      <div>
        {this.state.counters.map((val) => (
          <Counter key={val.id} value={val.value} selected={true} />
        ))}
      </div>
    );
  }
}

export default Counters;
