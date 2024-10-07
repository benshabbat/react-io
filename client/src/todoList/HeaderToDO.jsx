import "./todolist.css";
export default function HeaderToDO(props) {
  const addTodo = (e) => {
    if (e.key === "Enter" && props.newTodo.trim() !== "") {
      props.setTodos([
        ...props.todos,
        { id: Date.now(), title: props.newTodo, completed: false, active: true },
      ]);
      props.setNewTodo("");
    }
  };
  return (
    <header className="header">
    <h1>todos</h1>
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
      value={props.newTodo}
      onChange={(e) => props.setNewTodo(e.target.value)}
      onKeyPress={addTodo}
    />
  </header>
  );
}
