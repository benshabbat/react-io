//TODO: to check with moved props from main
// after it to check what from functions and use state to move here.


export default function MainToDo(props) {

  return (
<section className="main">
        <input className="toggle-all" type="checkbox" onClick={props.toShowOrhide} />
        <ul className="todo-list">
          {props.show &&
            props.filteredTodos?.map((todo) => (
              <li
                key={todo.id}
                className={`${todo.completed ? "completed" : ""} ${
                  props.editingId === todo.id ? "editing" : ""
                }`}
              >
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => props.toggleTodo(todo.id)}
                  />
                  <label onDoubleClick={() => props.startEditing(todo.id)}>
                    {todo.title}
                  </label>
                  <button
                    className="destroy"
                    onClick={() => props.deleteTodo(todo.id)}
                  />
                </div>
                {props.editingId === todo.id && (
                  <input
                    className="edit"
                    defaultValue={todo.title}
                    onBlur={(e) => props.editTodo(todo.id, e.target.value)}
                    onKeyDown={(e) => props.handleEditKeyPress(e, todo.id)}
                    autoFocus
                  />
                )}
              </li>
            ))}
        </ul>
      </section>
  );
}
