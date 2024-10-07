import { useState } from "react";
export default function HeaderToDO(props) {
  const [newTodo, setNewTodo] = useState("");
  const addTodo = (e) => {
    if (e.key === "Enter" && newTodo.trim() !== "") {
      props.setTodos([
        ...props.todos,
        { id: Date.now(), title: newTodo, completed: false, active: true },
      ]);
      setNewTodo("");
    }
  };
  return (
    <header className="header">
    <h1>todos</h1>
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
      value={newTodo}
      onChange={(e) => setNewTodo(e.target.value)}
      onKeyPress={addTodo}
    />
  </header>
  );
}
