import { createElement, useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const inputData = (type, name) => {
    return createElement("input", {
      type,
      placeholder: name,
      name,
      onChange: handleChange,
    });
  };

  const preInput = (header) => {
    return createElement("h2", { className: "red" }, header);
  };


  const creatSubmitButton =()=>{
    return createElement("button", { type: "submit" }, "Submit")
  }
  return createElement(
    "form",
    { onSubmit: onSubmit },
    // createElement("label", {}, "FirstName"),
    preInput("First Name"),
    inputData("text", "firstName"),
    // createElement("input", {
    //   name: "firstName",
    //   placeholder: "firstName",
    //   onChange: handleChange,
    // }),
    preInput("Last Name"),
    // createElement("label", { className: "red" }, "LastName"),
    inputData("text", "lastName"),
    // createElement("input", {
    //   name: "lastName",
    //   placeholder: "lastName",
    //   onChange: handleChange,
    // }),
    // createElement("label", {}, "Age"),
    preInput("Age"),
    inputData("number", "age"),
    // createElement("input", {
    //   name: "age",
    //   placeholder: "age",
    //   onChange: handleChange,
    // }),
    // createElement("button", { type: "submit" }, "Submit")
    creatSubmitButton()
  );
}
