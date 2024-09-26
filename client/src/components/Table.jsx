import { createElement } from "react";

const trTh = ["hello1", "hello2", "hello3"];
const trTd = [
  ["data1", "data2", "data3"],
  ["data4", "data5", "data6"],
];

function createTable(trTh, trTd) {
  return createElement(
    "table",
    { border: 1 },
    createElement(
      "thead",
      { className: "table-header" },
      createElement(
        "tr",
        {},
        trTh.map((header, index) => {
          return createElement("th", { key: index }, header);
        })
      )
    ),
    createElement(
      "tbody",
      { className: "table-body" },
      trTd.map((data, index) => {
        return createElement(
          "tr",
          { key: index },
          data.map((td, tdIndex) => {
            return createElement("td", { key: tdIndex }, td);
          })
        );
      })
    )
  );
}

export function TableFunc() {
  return createTable(trTh, trTd);
}
export function Table() {
  return createElement(
    "table",
    { border: 1 },
    createElement(
      "thead",
      { className: "table-header" },
      createElement(
        "tr",
        {},
        createElement("th", {}, "hello1"),
        createElement("th", {}, "hello2"),
        createElement("th", {}, "hello3")
      )
    ),
    createElement(
      "tbody",
      { className: "table-body" },
      createElement(
        "tr",
        {},
        createElement("td", {}, "data1"),
        createElement("td", {}, "data2"),
        createElement("td", {}, "data3")
      ),
      createElement(
        "tr",
        {},
        createElement("td", {}, "data4"),
        createElement("td", {}, "data5"),
        createElement("td", {}, "data6")
      )
    )
  );
}
