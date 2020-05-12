import React, { useState, ChangeEvent, FormEvent } from "react";

interface AddToFormProps {
  addTodo: AddTodo;
}

const AddTodoForm: React.FC<AddToFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
