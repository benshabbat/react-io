import { createElement } from "react";

export default function Profile(user) {
  return createElement(
    "div",
    { id: "profile" },
    createElement("h1", null, "Hello" + user.firstName),
    createElement(
      "h2",
      null,
      "Your Full Name: " + user.firstName + " " + user.lastName
    ),
    createElement("h2", null, "Your Age: " + user.age)
  );
}
