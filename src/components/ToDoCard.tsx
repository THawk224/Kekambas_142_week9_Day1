import React from 'react';
import { ToDo } from '../types';

interface ToDoCardProps {
  todo: ToDo;
}


// Component to display a single to-do.

const ToDoCard: React.FC<ToDoCardProps> = ({ todo }) => {
  return (
    <div>
      <p>{todo.task}</p>
    </div>
  );
};

export default ToDoCard;
