import React from 'react';

function TodoList({ todos, removeTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} className="todo">
          {todo.text}
          <button onClick={() => removeTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
