import React from "react";
import TodoListItem from "./TodoListItem";

interface TodoListProps {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo, i) => (
        <TodoListItem key={i} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
