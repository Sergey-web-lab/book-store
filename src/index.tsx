import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import './firebase';

import App from "./components/App/App";
import { store, persistor } from "./features/store";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

const root = document.getElementById("root");

root
  &&
  createRoot(root).render(
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );