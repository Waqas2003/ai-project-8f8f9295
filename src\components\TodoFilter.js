import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

function TodoFilter() {
  const { filterTodos, clearCompleted } = useContext(TodoContext);

  return (
    <div className="flex justify-between mb-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={filterTodos}
      >
        Filter Todos
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={clearCompleted}
      >
        Clear Completed
      </button>
    </div>
  );
}

export default TodoFilter;