import React from "react";
import ReactDom from "react-dom";
import App from "./app";
import "bootstrap/dist/css/bootstrap.min.css";

//let div = React.createElement("div", { className: "test" }, ["test"]);

ReactDom.render(<App name="serj" age={34} />, document.querySelector("#app"));
