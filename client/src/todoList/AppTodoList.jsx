import { useState } from "react";
import HeaderToDO from "./HeaderToDO";
import MainToDo from "./MainToDo";
import FooterToDo from "./FooterToDo";

export default function AppTodoList() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });
  return (
    <section className="todoapp">
      <HeaderToDO setTodos={setTodos} todos={todos}/>
      <MainToDo todos={todos} filteredTodos={filteredTodos}  setTodos={setTodos} />
      <FooterToDo todos={todos}  setTodos={setTodos}  filter={filter} setFilter={setFilter}/>

    </section>
  );
}
