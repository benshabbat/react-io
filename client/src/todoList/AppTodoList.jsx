import { useState } from "react";
import HeaderToDO from "./HeaderToDO";
import MainToDo from "./MainToDo";

export default function AppTodoList() {
  const [todos, setTodos] = useState([]);
  
  const [filter, setFilter] = useState("all");

  const getAll = () => {
    setFilter("all");
  };
  const getActive = () => {
    setFilter("active");
  };

  const getCompleted = () => {
    setFilter("completed");
  };
 

  const clearCompleted = () =>
    setTodos(todos.filter((todo) => !todo.completed));

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };



  return (
    <section className="todoapp">
      <HeaderToDO setTodos={setTodos} todos={todos}/>
      <MainToDo todos={todos} filter={filter}  setTodos={setTodos}  deleteTodo={deleteTodo} />
      {/* <section className="main">
        <input className="toggle-all" type="checkbox" onClick={toShowOrhide} />
        <ul className="todo-list">
          {show &&
            filteredTodos?.map((todo) => (
              <li
                key={todo.id}
                className={`${todo.completed ? "completed" : ""} ${
                  editingId === todo.id ? "editing" : ""
                }`}
              >
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
                  <button
                    className="destroy"
                    onClick={() => deleteTodo(todo.id)}
                  />
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
      </section> */}

      <footer className="footer">
        <span className="todo-count">
          <strong>{todos.filter((todo) => !todo.completed).length}</strong>{" "}
          items left
        </span>
        <ul className="filters">
          <li>
            {todos.some((todo) => todo.completed) && (
              <button className="clear-completed" onClick={clearCompleted}>
                Clear completed
              </button>
            )}
          </li>
          <li>
            <a
              href="#/"
              onClick={getAll}
              className={filter === "all" ? "selected" : ""}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#/active"
              onClick={getActive}
              className={filter === "active" ? "selected" : ""}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/completed"
              onClick={getCompleted}
              className={filter === "completed" ? "selected" : ""}
            >
              Completed
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
}
