import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routing from "./routes";

// Styles
import { Wrapper } from "./index.styled";

// store
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Wrapper>
        <Routing />
      </Wrapper>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
