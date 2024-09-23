import { createElement, useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState();

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
    console.log(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
  };
  return createElement(
    "form",
    {onSubmit:onSubmit},
    createElement("label", {}, "FirstName"),
    createElement("input", {
      name: "firstName",
      placeholder: "firstName",
      onChange: handleChange,
    }),
    createElement("label", { className: "red" }, "LastName"),
    createElement("input", {
      name: "lastName",
      placeholder: "lastName",
      onChange: handleChange,
    }),
    createElement("label", {}, "Age"),
    createElement("input", {
      name: "age",
      placeholder: "age",
      onChange: handleChange,
    }),
    createElement("button", { type:"submit"}, "Submit")
  );
}
