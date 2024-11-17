import { useFilterTodo } from "./useFilterTodo";
import { useTodoList } from "./useTodoList";

export default function FooterToDo(props) {
  const {getAll, getCompleted, getActive} = useFilterTodo(props.setFilter)
  const {clearCompleted} =useTodoList(props.setTodos,props.todos)

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
