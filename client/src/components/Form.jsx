import { createElement } from "react";

export default function Form() {
  return createElement(
    "form",
    null,
    createElement("label", {}, "FirstName"),
    createElement("input", {
      name: "firstName",
      placeholder: "firstName",
    }),
    createElement("label", {className: "red"}, "LastName"),
    createElement("input", {
      name: "lastName",
      placeholder: "lastName",
    }),
    createElement("label", {}, "Age"),
    createElement("input", { name: "age", placeholder: "age" }),
    createElement("button", { onClick: () => alert("hello") }, "Submit")
  );
}
