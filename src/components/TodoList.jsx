function TodoList({ todos, handleDeleteTodo, handleToggleTodo }) {
  return (
    <ul className="mt-4">
      {todos.map((todo, index) => (
        <li key={index} className="flex items-center justify-between mb-2">
          <span
            onClick={() => handleToggleTodo(index)}
            className={`border border-gray-500 cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
          >
            {todo.text}
          </span>
          <button
            onClick={() => handleDeleteTodo(index)}
            className="bg-red-500 text-gray-500 px-2 py-1 rounded"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;