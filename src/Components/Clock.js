import React, { Component } from 'react';

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      time: '88:88:88'
    }
  }

  componentDidMount() {
    setInterval( () => {
      let time = new Date();
      let hour = this.toTwoDigits(time.getHours());
      let minute = this.toTwoDigits(time.getMinutes());
      let second = this.toTwoDigits(time.getSeconds());

      this.setState({
        time: hour + ':' + minute + ':' + second
      });
    }, 1000);
  }

  // Make every number of time is two digits
  toTwoDigits(time) {
    if (time < 10) {
      time = '0' + time.toString();
    } 
    return time;
  }

  render() {
    return (
      <div className="time">{this.state.time}</div>
    )
  }
}

export default Clock;