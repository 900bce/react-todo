import React from 'react';
import './App.scss';
import List from './Components/List';
import AddTodo from './Components/AddTodo';
import Clock from './Components/Clock';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          data: '吃飯'
        },
        {
          id: 2,
          data: 'Sleep'
        },
        {
          id: 3,
          data: '洗澡'
        }
      ]
    }
  }

  addTodo = (newTodo) => {
    const todo = {};
    todo.id = this.state.todos.length + 1;
    todo.data = newTodo;
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  doneTodo = (evt) => {
    evt.target.classList.toggle('done');
  }

  deleteTodo = (todoId) => {
    const newList = this.state.todos.filter(elmt => {
      return elmt.id !== todoId;
    })
    this.setState({todos: newList});
  }

  render() {
    return (
      <div className="container">
        <h1>To-do List</h1>
        <Clock />
        <AddTodo addTodo={this.addTodo} />
        <List todos={this.state.todos} doneTodo={this.doneTodo} deleteTodo={this.deleteTodo} />
      </div>
    )
  }
}

export default App;
