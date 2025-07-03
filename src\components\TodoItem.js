import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

function TodoItem({ todo }) {
  const { deleteTodo, toggleTodo } = useContext(TodoContext);

  return (
    <li className="flex justify-between mb-4">
      <span
        className={`text-lg ${todo.completed ? 'line-through' : ''}`}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.title}
      </span>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;