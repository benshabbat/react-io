import "./todolist.css";
import {useState} from "react"
export default function HeaderToDO() {
  // const [item, setItem] = useState()
  return (
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo" placeholder="What needs to be done?" autoFocus onInput={}/>
    </header>
  );
}
