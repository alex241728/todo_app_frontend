import React from 'react';

const TodoList = ({todos, title}) => {
  return (
    <div className="todo_list">
      <h2>{title}</h2>
      {
        todos.map(todo => (
          <div className="todo_preview" key={todo.id}>
            <h2>{todo.title}</h2>
            <p>Written by {todo.writer}</p>
          </div>
        ))
      }
    </div>
  );
}

export default TodoList;
