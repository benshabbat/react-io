// import { createElement, Fragment } from "react";
// import Form from "./components/Form";
// import {Hedaer} from "./components/Hedaer";
// // import "./style.css"
// import { Test } from "./components/Test";


import AppTodoList from "./todoList/AppTodoList";
import "./todoList/todolist.css";

// import "./mole/mole.css"
// import AppMole from "./mole/AppMole";
function App() {
  // return createElement(Fragment, null, createElement(Hedaer), createElement(Form));


  return <AppTodoList/>
  // return <AppMole/>
}

export default App;
