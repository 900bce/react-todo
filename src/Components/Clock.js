import React, { Component } from 'react';

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString(undefined, {hour12: false})
    }
  }

  componentDidMount() {
    setInterval( () => {
      this.setState({
        time: new Date().toLocaleTimeString(undefined, {hour12: false})
      });
    }, 1000);
  }

  render() {
    return (
      <div className="time">{this.state.time}</div>
    )
  }
}

export default Clock;