import { createElement } from "react";
import MyProfile from "../images/my_profile.jpg";

export function Card() {
  // createElement(type, props, ...children)
  // type: the element type or component
  // props: object containing the element's properties (attributes)
  // children: other elements or text content
  return createElement(
    "div",
    { className: "card" },
    createElement("img", {className: "imgae", src: MyProfile, alt: "profile card" }, null),
    createElement("h2", { className: "title" }, "David-Chen Benshabbat"),
    createElement("p", { className: "description" }, "Learning React IO")
  );
}
export function CardJsx() {
  return (
    <div className="card">
      <img className="image" src={MyProfile} alt="profile Card" />
      <h2 className="title">David-Chen Benshabbat</h2>
      <p className="description">Learning React IO</p>
    </div>
  );
}
