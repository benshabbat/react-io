
import { useState } from "react";
export default function MainToDo(props) {
  const [show, setShow] = useState(true);
  const [editingId, setEditingId] = useState(null);

  const toggleTodo = (id) => {
    props.setTodos(
      props.todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed, active: !todo.active }
          : todo
      )
    );
  };

  const toShowOrhide = () => {
    setShow(!show);
  };
 

  const startEditing = (id) => {
    setEditingId(id);
  };

  const handleEditKeyPress = (e, id) => {
    if (e.key === "Enter") {
      editTodo(id, e.target.value);
    } else if (e.key === "Escape") {
      setEditingId(null);
    }
  };
  const editTodo = (id, newTitle) => {
    props.setTodos(
      props.todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
    setEditingId(null);
  };


  const deleteTodo = (id) => {
    props.setTodos(props.todos.filter((todo) => todo.id !== id));
  };

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" onClick={toShowOrhide} />
      <ul className="todo-list">
        {show &&
          props.filteredTodos.map((todo) => (
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
