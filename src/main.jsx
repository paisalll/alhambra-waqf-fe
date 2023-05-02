import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/routes/index";
import { useStore } from "./stores/useStore";
import "../src/styles/main.scss";
import { SWRConfig } from "swr";
import { Provider } from "react-redux";

const fetcher = (url) => axios.get(url).then((res) => res.data);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={useStore}>
      <SWRConfig
        value={{
          fetcher,
          onError: (err) => {
            console.error(err);
          },
        }}
      >
        <App />
      </SWRConfig>
    </Provider>
  </React.StrictMode>,
);
