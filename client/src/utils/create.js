import { createElement } from "react";


export const inputData = (type, name,onChange) => {
  return createElement("input", {
    type,
    placeholder: name,
    name,
    onChange,
  });
};

export const preInput = (title) => {
  return createElement("h2", { className: "red" }, title);
};

export const creatSubmitButton = () => {
  return createElement("button", { type: "submit" }, "Submit");
};
