import TodoList from './TodoList';
import TodoStats from './TodoStats';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import useLocalStorage from '../hooks/useLocalStorage';
import { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (text) => {
    if (text.trim() !== '') {
      setTodos([...todos, {text: text, completed: false}]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleToggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <div className="max-w-md mx-auto bg-green-200 p-6 rounded-lg shadow-md">
      <AddTodo newTodo={newTodo} setNewTodo={setNewTodo} handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} handleToggleTodo={handleToggleTodo} handleDeleteTodo={handleDeleteTodo} />
      <TodoStats todos={todos} />
    </div>
  );
}

export default TodoApp;