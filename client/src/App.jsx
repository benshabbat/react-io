import { createElement, useState } from "react";

function Title(name) {
  return createElement("h1", null, name);
}

function Test({name}) {
  const [title,setTitle] = useState("")
  return (
    createElement(Title(name)),
    createElement(
      "form",
      null,
      createElement("input", {
        value: "check",
        name: "firstName",
        placeholder: "firstName",
      }),
      createElement("input", {
        value: "check",
        name: "lastName",
        placeholder: "lastName",
      }),
      createElement("input", { value: "check", name: "age", placeholder: "age" })
    )
  );
}
function App() {
  // return Test("david", "dd", 12)
  return <Test/>
}

export default App;
