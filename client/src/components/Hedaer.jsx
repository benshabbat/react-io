import { createElement } from "react";
export default function Hedaer() {
  return createElement(
    "ul",
    null,
    createElement("li", null, createElement("a", {href:"#form"}, "Form")),
    createElement("li", null, createElement("a", {href:"#profile"}, "Profile"))
  );
}
