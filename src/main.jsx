import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Main from "./pages/Main";
import LoginRegisterHandler from "./components/LoginRegisterHandler";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoutes from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";

import axios from "axios";

axios.defaults.headers.common["Accept"] =
  "application/json, text/plain, */*, text/html";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Main />} />,
    <Route element={<LoginRegisterHandler />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Route>,
    <Route element={<PrivateRoutes />}>
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>,
  ])
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
