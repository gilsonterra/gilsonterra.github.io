"use client";

import { MenuItems } from "@/app/components/Menu/type";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./style.css";

const MenuMobile: React.FC<MenuItems> = ({ items, activePath = "" }) => {
  const [open, setOpen] = useState(false);
  const title = open ? "Fechar" : "Menu";
  const isActive = (href: string) =>
    activePath === href || (href !== "/" && activePath.startsWith(`${href}/`));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className={`menu-mobile ${open ? "menu-mobile--open" : ""}`}>
      <button
        className="menu-btn"
        title={title}
        aria-label={title}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <XMarkIcon width="24" height="24" /> : <Bars3Icon width="24" height="24" />}
      </button>

      {open && (
        <ul className="menu-mobile__panel">
          {items?.map((item) => (
            <li key={`menu-${item.href}`} className={isActive(item.href) ? "is-active" : ""}>
              <Link href={item.href} scroll onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuMobile;
