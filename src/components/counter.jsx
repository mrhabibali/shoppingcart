import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgename()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgename() {
    let badgeName = "badge m-2 ";

    const count = this.props.counter.value;

    if (count === 0) {
      badgeName += "bg-warning";
    } else {
      badgeName += "bg-primary";
    }

    return badgeName;
  }

  formatCount() {
    const count = this.props.counter.value;

    if (count === 0) {
      return "Zero";
    }
    return count;
  }
}

export default Counter;

//<span className={this.getBadgename()}>{this.formatCount()}</span>
