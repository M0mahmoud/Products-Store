import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import store from "./store";
import { Provider } from "react-redux";

import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/sea-green";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
