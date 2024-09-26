import { createElement } from "react";


  // createElement(type, props, ...children)
  // type: the element type or component
  // props: object containing the element's properties (attributes)
  // children: other elements or text content
export function Hedaer() {
  return createElement(
    "ul",
    null,
    createElement("li", null, createElement("a", {href:"#form"}, "Form")),
    createElement("li", null, createElement("a", {href:"#profile"}, "Profile"))
  );
}

export function HedaerJsx() {
    return <ul>
        <li><a href="#form">Form</a></li>
        <li><a href="#profile">Profile</a></li>
    </ul>
  }