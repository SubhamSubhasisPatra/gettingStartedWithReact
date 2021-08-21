import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-outline-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((val) => (
          <Counter
            key={val.id}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
            val={val}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
