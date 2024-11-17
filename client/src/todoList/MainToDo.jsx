import { useTodoList } from "./useTodoList";
export default function MainToDo({ filteredTodos, setTodos, todos }) {
  const {
    toShowOrhide,
    show,
    editingId,
    toggleTodo,
    startEditing,
    deleteTodo,
    editTodo,
    handleEditKeyPress,
  } = useTodoList(setTodos, todos);

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" onClick={toShowOrhide} />
      <ul className="todo-list">
        {show &&
          filteredTodos.map((todo) => (
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
              <input
                className="edit"
                defaultValue={todo.title}
                onBlur={(e) => editTodo(todo.id, e.target.value)}
                onKeyDown={(e) => handleEditKeyPress(e, todo.id)}
                autoFocus
              />
            </li>
          ))}
      </ul>
    </section>
  );
}
