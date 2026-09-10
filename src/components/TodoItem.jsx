function TodoItem({ todo, index, handleDeleteTodo, handleToggleTodo }) {
  return (
    <li className="flex items-center justify-between mb-2">
      <span
        onClick={() => handleToggleTodo(index)}
        className={`cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => handleDeleteTodo(index)}
        className="bg-red-500 text-gray-500 px-2 py-1 rounded"
      >
        Delete now
      </button>
    </li>
  );
}

export default TodoItem;