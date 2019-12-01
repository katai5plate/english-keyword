import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

const app = document.createElement("div");
app.id = "app";
document.body.appendChild(app);

ReactDOM.render(<App />, document.getElementById("app"));
