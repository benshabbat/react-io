import { createElement } from "react";
export default function Hedaer() {
  return createElement(
    "ul",
    null,
    createElement("li", null, "text1"),
    createElement("li", null, "text2")
  );
}
