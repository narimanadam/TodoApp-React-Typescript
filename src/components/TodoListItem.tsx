import React from "react";
import "./TodoListItem.css";

interface IProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const TodoListItem: React.FC<IProps> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label className={todo.complete ? "complete" : undefined}>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
        />
        {todo.text}
      </label>
    </li>
  );
};

export default TodoListItem;
