import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import LoginRegisterHandler from "./components/LoginRegisterHandler";
import PrivateRoutes from "./components/PrivateRoute";
import axios from "axios";

axios.defaults.headers.common["Accept"] =
  "application/json, text/plain, */*, text/html";

function App() {
  return <div className="">Helw</div>;
}

export default App;
