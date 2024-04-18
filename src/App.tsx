import React, { useState } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoCard from './components/ToDoCard';
import { ToDo } from './types';

// Main App component that holds the state and renders subcomponents.

const App: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const addTask = (task: string) => {
    const newToDo: ToDo = { id: Date.now(), task };
    setTodos([...todos, newToDo]);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <ToDoForm addTask={addTask} />
      {todos.map(todo => (
        <ToDoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default App;
