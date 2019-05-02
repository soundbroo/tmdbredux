import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

export const Menu = () => (
  <>
    <Link className="menu-item" to="/popular">
      Популярные
    </Link>
    <Link className="menu-item" to="/favourite">
      Избранные
    </Link>
  </>
);
