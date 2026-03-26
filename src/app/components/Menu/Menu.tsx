"use client";

import React from "react";
import { usePathname } from "next/navigation";
import MenuDesktop from "./components/MenuDesktop/MenuDesktop";
import MenuMobile from "./components/MenuMobile/MenuMobile";
import DATA from "./data.json";
import "./style.css";

const Menu: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="menu">
      <MenuMobile key={pathname} items={DATA.items} activePath={pathname} />
      <MenuDesktop items={DATA.items} activePath={pathname} />
    </nav>
  );
};

export default Menu;
