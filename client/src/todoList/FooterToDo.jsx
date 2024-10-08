//TODO: to check with moved props from apptodo
// after it to check what from functions and use state to move here.

export default function FooterToDo(props) {
  const getAll = () => {
    props.setFilter("all");
  };
  const getActive = () => {
    props.setFilter("active");
  };

  const getCompleted = () => {
    props.setFilter("completed");
  };
  const clearCompleted = () =>
    props.setTodos(props.todos.filter((todo) => !todo.completed));



  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{props.todos.filter((todo) => !todo.completed).length}</strong>{" "}
        items left
      </span>
      <ul className="filters">
        <li>
          {props.todos.some((todo) => todo.completed) && (
            <button className="clear-completed" onClick={clearCompleted}>
              Clear completed
            </button>
          )}
        </li>
        <li>
          <a
            href="#/"
            onClick={getAll}
            className={props.filter === "all" ? "selected" : ""}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/active"
            onClick={getActive}
            className={props.filter === "active" ? "selected" : ""}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/completed"
            onClick={getCompleted}
            className={props.filter === "completed" ? "selected" : ""}
          >
            Completed
          </a>
        </li>
      </ul>
    </footer>
  );
}
