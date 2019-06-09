import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

export const Menu = () => (
  <>
    <hr color='#333333' />
    <Link className="menu-item" to="/popular">Популярные</Link>
    <hr color='#333333' />
    <Link className="menu-item" to="/favourite">Избранные</Link>
  </>
);
