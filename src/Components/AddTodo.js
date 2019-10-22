import React, { Component } from 'react';

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      content: ''
    }
  }

  handleChange = (evt) => {
    this.setState({
      content: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.addTodo(this.state.content);
    this.setState({content: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="add-todo">
        <input onChange={this.handleChange} type="text" placeholder="add" value={this.state.content} />
      </form>
    );
  }
}

export default AddTodo;