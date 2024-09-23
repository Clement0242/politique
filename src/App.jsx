import React from "react";
import ReactDOM from "react-dom";
import MiCompPolitica from "./MiCompPolitica";

import "./index.css";

const App = () => (
  <div className="container">
     <MiCompPolitica />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

  