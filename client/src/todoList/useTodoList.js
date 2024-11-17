import { useState } from "react";
export function useTodoList(setTodos,todos) {
//   const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [newTodo, setNewTodo] = useState("");
  const [show, setShow] = useState(true);
  const [editingId, setEditingId] = useState(null);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
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

  const editTodo = (id, newTitle) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
    setEditingId(null);
  };
  const handleEditKeyPress = (e, id) => {
    if (e.key === "Enter") {
      editTodo(id, e.target.value);
    } else if (e.key === "Escape") {
      setEditingId(null);
    }
  };


  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  
  const handleAdd = (e) => setNewTodo(e.target.value)
  const addTodo = (e) => {
    if (e.key === "Enter" && newTodo.trim() !== "") {
      setTodos([
        ...todos,
        { id: Date.now(), title: newTodo, completed: false, active: true },
      ]);
      setNewTodo("");
    }
  };


  const clearCompleted = () =>
    setTodos(todos.filter((todo) => !todo.completed));



  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });


  return {
    setTodos,
    setFilter,
    todos,
    filter,
    addTodo,handleAdd,newTodo,clearCompleted



    ,toShowOrhide,show,filteredTodos,editingId,toggleTodo,startEditing,deleteTodo,editTodo,handleEditKeyPress
  };
}
