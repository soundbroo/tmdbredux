import React from "react";
import "./Sidebar.css";
import Search from "./search/Search";
import { Menu } from "./menu/Menu";

export const Sidebar = () => (
  <div className="sidebar-container">
    <Search />
    <Menu />
  </div>
);
