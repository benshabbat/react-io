import { createElement } from "react";

export default function Table() {
  return createElement(
    "table",{ border: 1 },
    createElement(
      "thead",{ className: "table-header" },
      createElement("tr", {},
         createElement("th", {}, "hello1"),
         createElement("th", {}, "hello2"),
         createElement("th", {}, "hello3"),
        )
    ),
    createElement(
        "tbody",{ className: "table-body" },
        createElement("tr", {},
           createElement("td", {}, "data1"),
           createElement("td", {}, "data2"),
           createElement("td", {}, "data3"),
          ),
        createElement("tr", {},
           createElement("td", {}, "data4"),
           createElement("td", {}, "data5"),
           createElement("td", {}, "data6"),
          )
      )
  );
}
