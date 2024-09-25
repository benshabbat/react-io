import { createElement, useState } from "react";
import Profile from "./Profile";
import Card from "./Card";

export default function Form() {
  const [formData, setFormData] = useState();
  const iputsDataArr = [
    { type: "text", name: "firstName", title: "First Name" },
    { type: "text", name: "lastName", title: "Last Name" },
    { type: "number", name: "age", title: "Age" },
  ];

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

  const preInput = (title) => {
    return createElement("h2", { className: "red" }, title);
  };

  const creatSubmitButton = () => {
    return createElement("button", { type: "submit" }, "Submit");
  };

  return createElement(
    "form",
    { onSubmit: onSubmit ,id:"form"},
    ...iputsDataArr.map((input) =>
        createElement(
          "div",
          { key: input.name },
          preInput(input.title),
          inputData(input.type, input.name)
        )
      ),
    creatSubmitButton(),

    createElement(Card),
    formData ?createElement(Profile, { user: formData }):null,
  );
}

// //Get Data checked
// iputsDataArr.forEach((input) => {
//     console.log(input)
//   }),


//why not working

// iputsDataArr.forEach((input) => {
//   return createElement("div",null,
//     preInput(input.title),
//     inputData(input.type, input.name)
//   );
// }),




    // //without loop
    // preInput("First Name"),
    // inputData("text", "firstName"),
    // preInput("Last Name"),
    // inputData("text", "lastName"),
    // preInput("Age"),
    // inputData("number", "age"),



        // //working
    // ...iputsDataArr.map((input) =>
    //     createElement(
    //       "div",
    //       { key: input.name },
    //       preInput(input.title),
    //       inputData(input.type, input.name)
    //     )
    //   ),