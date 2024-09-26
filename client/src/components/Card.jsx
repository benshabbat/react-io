import { createElement } from "react";
import MyProfile from "../images/my_profile.jpg";

function createDiv(...children) {
  return createElement("div", { className: "card" }, ...children);
}
function createImage(pic, alt) {
  return createElement("img", { className: "imgae", src: pic, alt }, null);
}
function createTitle(text) {
  return createElement("h2", { className: "title" }, text);
}
function createDesc(text) {
  return createElement("p", { className: "description" }, text);
}
export function Card() {
  // createElement(type, props, ...children)
  // type: the element type or component
  // props: object containing the element's properties (attributes)
  // children: other elements or text content
  return createElement("div",{ className: "card" },
    createElement("img",{ className: "image", src: MyProfile, alt: "profile card" },null),
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

export function CardWithFuncOfCreateElement() {
  return createDiv(
    createImage(MyProfile, "profile card"),
    createTitle("David-Chen Benshabbat"),
    createDesc("Learning React IO")
  );
}
