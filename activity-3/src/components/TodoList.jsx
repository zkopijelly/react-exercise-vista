import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo(''); 
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list-container">
      <div className="todo-input-container">
        <input
          type="text"
          className="todo-input"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button className="todo-submit-button" onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo}
            <button
              className="todo-delete-button"
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
