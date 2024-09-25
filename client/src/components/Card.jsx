import { createElement } from "react";
import MyProfile from "../images/my_profile.jpg";

export default function Card() {
  return (
    createElement("div",{className:"card"},
        createElement("img",{src:MyProfile,alt:"profile card"},null),
        createElement("h2",{},"David-Chen Benshabbat"),
        createElement("p",{},"Learning React"),
    )
  )
}
