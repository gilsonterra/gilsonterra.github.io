"use client";

import React from "react";
import MenuDesktop from "./components/MenuDesktop/MenuDesktop";
import MenuMobile from "./components/MenuMobile/MenuMobile";

import DATA from "./data.json";
import "./style.css";

const Menu: React.FC = () => {
  return (
    <nav className="menu">
      <MenuMobile items={DATA.items} />
      <MenuDesktop items={DATA.items} />
    </nav>
  );
};

export default Menu;
