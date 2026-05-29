import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom"; // ✅ use BrowserRouter
import App from "./App";
import store from "./store/index";
import "./index.css";

const muiTheme = createTheme({
  palette: {
    primary: { main: "#1677ff" },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={muiTheme}>
        <ConfigProvider theme={{ token: { colorPrimary: "#1677ff" } }}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ConfigProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
