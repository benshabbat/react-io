import { useState } from "react";
import HeaderToDO from "./HeaderToDO";
import MainToDo from "./MainToDo";
import FooterToDo from "./FooterToDo";
import { useTodoList } from "./useTodoList";

export default function AppTodoList() {
  const [todos, setTodos] = useState([]);
  const { setFilter, filteredTodos, filter } = useTodoList(setTodos, todos);
  return (
    <section className="todoapp">
      <HeaderToDO setTodos={setTodos} todos={todos} />
      <MainToDo
        todos={todos}
        filteredTodos={filteredTodos}
        setTodos={setTodos}
      />
      <FooterToDo
        todos={todos}
        setTodos={setTodos}
        filter={filter}
        setFilter={setFilter}
      />
    </section>
  );
}
