import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

function TodoForm() {
  const { addTodo } = useContext(TodoContext);
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add new todo"
        className="w-full p-2 pl-10 text-sm text-gray-700"
      />
      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;