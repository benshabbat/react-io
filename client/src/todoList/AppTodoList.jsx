// import FooterToDo from "./FooterToDo";
// import HeaderToDO from "./HeaderToDO";
// import MainToDo from "./MainToDo";

import { useState } from "react";

export default function AppTodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingId, setEditingId] = useState(null);

  const addTodo = (e) => {
    if (e.key === "Enter" && newTodo.trim() !== "") {
      setTodos([
        ...todos,
        { id: Date.now(), title: newTodo, completed: false },
      ]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const clearCompleted = () =>
    setTodos(todos.filter((todo) => !todo.completed));

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEditing = (id) => {
    setEditingId(id);
  };
  const editTodo = (id, newTitle) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
    setEditingId(null);
  };
  const handleEditKeyPress = (e, id) => {
    if (e.key === "Enter") {
      editTodo(id, e.target.value);
    } else if (e.key === "Escape") {
      setEditingId(null);
    }
  };
  return (
    <section className="todoapp">
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

      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <ul className="todo-list">
          {todos &&
            todos?.map((todo) => (
              <li key={todo.id} className={todo.completed ? "completed" : ""}>
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <label onDoubleClick={() => startEditing(todo.id)}>
                    {todo.title}
                  </label>
                  <button className="destroy" onClick={deleteTodo} />
                </div>
                {editingId === todo.id && (
                  <input
                    className="edit"
                    defaultValue={todo.title}
                    onBlur={(e) => editTodo(todo.id, e.target.value)}
                    onKeyDown={(e) => handleEditKeyPress(e, todo.id)}
                    autoFocus
                  />
                )}
              </li>
            ))}
        </ul>
      </section>

      <footer className="footer">
        <span className="todo-count">
          <strong>{todos.filter((todo) => !todo.completed).length}</strong>{" "}
          items left
        </span>
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      </footer>
    </section>
  );
}
