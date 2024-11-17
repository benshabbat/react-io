
import { useTodoList } from "./useTodoList";
export default function HeaderToDO({setTodos,todos}) {

  const {addTodo,handleAdd,newTodo}=useTodoList(setTodos,todos)
  return (
    <header className="header">
    <h1>todos</h1>
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
      value={newTodo}
      onChange={(e)=>handleAdd(e)}
      onKeyPress={(e)=>addTodo(e)}
    />
  </header>
  );
}
