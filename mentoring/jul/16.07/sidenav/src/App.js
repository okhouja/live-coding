import React, { useState } from "react";
import "./sass/main.scss";
import Sidenav from "./components/Sidenav";

function App() {
  const [theme, setTheme] = useState([]);

  return (
    <React.Fragment>
      <Sidenav />
    </React.Fragment>
  );
}

export default App;
