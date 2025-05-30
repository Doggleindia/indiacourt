import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import './fonts.css';
import App from "./App";
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from "react-redux";
import store from "./redux/store";
import theme from './theme'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <Provider store={store}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
