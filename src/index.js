import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SpeechProvider } from "@speechly/react-client";
import { Provider } from "./Context/Context";

ReactDOM.render(
  <SpeechProvider
    appId="3801354a-881a-4c26-b7ac-142f41f9cdda"
    language="en-US"
  >
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
