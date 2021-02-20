import React from "react";
import "./App.scss";

// SEO
import { Helmet, HelmetProvider } from "react-helmet-async";

// State Management
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <Helmet>
          <title>App Title Boilerplate</title>
        </Helmet>
        <div className="App"></div>
      </HelmetProvider>
    </Provider>
  );
}

export default App;
