import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>App Title Boilerplate</title>
      </Helmet>
      <div className="App"></div>
    </HelmetProvider>
  );
}

export default App;
