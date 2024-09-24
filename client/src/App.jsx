import { createElement, Fragment } from "react";
import Form from "./components/Form";
import Hedaer from "./components/Hedaer";
import "./style.css"

function App() {
  return createElement(Fragment, null, createElement(Hedaer), createElement(Form));
}

export default App;
