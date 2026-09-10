function AddTodo({ newTodo, setNewTodo, handleAddTodo }) {
  return (
    <div className="flex mb-4">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
        className="grow p-2 border border-gray-300 rounded-l"
      />
      <button
        onClick={() => handleAddTodo(newTodo)}
        className="bg-blue-500 text-gray-500 p-2 rounded-r hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;