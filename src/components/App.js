import React from "react";
import "./App.css";
import { Sidebar } from "./sidebar/Sidebar";
import Main from "./main/Main";

export const App = () => (
  <div className="app-container">
    <Sidebar />
    <Main />
  </div>
);
