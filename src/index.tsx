import React from "react";
import ReactDOM from "react-dom";

import { Button } from "./components/button";

const App = () => {
  return (
    <div>
      <Button />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
