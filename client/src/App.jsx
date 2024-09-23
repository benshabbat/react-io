import { createElement } from "react";
import Form from "./components/Form";
import Hedaer from "./components/Hedaer";
import "./style.css"
function App() {
  return createElement("div", null, createElement(Hedaer), createElement(Form));
}

export default App;
