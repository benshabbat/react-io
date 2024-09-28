import { createElement, Fragment } from "react";
import Form from "./components/Form";
import {Hedaer} from "./components/Hedaer";
import "./style.css"
import { Test } from "./components/Test";

function App() {
  // return createElement(Fragment, null, createElement(Hedaer), createElement(Form));
  return <Test/>
}

export default App;
