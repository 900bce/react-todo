import React from 'react';

const List = ({ todos, doneTodo, deleteTodo }) => {
  return (
    <ul className="todoList">
      {todos.map(todo => {
        return (
          <li key={todo.id} onClick={doneTodo}>
            {todo.data}
            <button onClick={() => deleteTodo(todo.id)} className="delete">x</button>
          </li>
        )
      })}
    </ul>
    )
}

export default List;