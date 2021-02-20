import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { get } from "./Services/Base";

function App() {
  async function getTodos() {
    const resp = await get("/todos");
    console.log(resp);
  }
  React.useEffect(() => {
    getTodos();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
