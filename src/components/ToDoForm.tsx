import React, { useState } from 'react';

interface ToDoFormProps {
    addTask: (task: string) => void;
}

// Component for input form to add new to-do tasks.

const ToDoForm: React.FC<ToDoFormProps> = ({ addTask }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
    addTask(input);
    setInput('');
    }
};

return (
    <form onSubmit={handleSubmit}>
    <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
    />
    <button type="submit">Add Task</button>
    </form>
);
};

export default ToDoForm;
