import React, { Component } from "react";

export default class CounterProfil extends Component {
  state = { count: 0, intervalId: 0 };

  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };
  componentDidMount() {
    this.setState({
      intervalId: setInterval(() => {
        this.inc();
      }, 1000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
  render() {
    return (
      <div>
        <h3>counter: {this.state.count}</h3>
      </div>
    );
  }
}
