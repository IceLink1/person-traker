import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "./store/store";

import "./styles/index.scss";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
