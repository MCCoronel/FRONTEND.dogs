//import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "../default.css";
//import '@fortawesome/fontawesome-free/css/all.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);


//El Provider conecta mi aplicacion de react con el store, el store es el estado de mi aplicacion, en este caso es el estado de mi aplicacion de redux, utiliza el reducer, que es quien define mi initial state