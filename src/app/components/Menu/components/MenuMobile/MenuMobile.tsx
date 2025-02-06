"use client";

import { MenuItems } from "@/app/components/Menu/type";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./style.css";

const MenuMobile: React.FC<MenuItems> = ({ items }) => {
  const [open, setOpen] = useState(false);
  const title = open ? "Fechar" : "Menu";
  const bodyHeight = document.documentElement.scrollHeight;

  return (
    <div className="menu-mobile">
      <button
        className="menu-btn"
        title={title}
        aria-label={title}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <XMarkIcon width="24" height="24" />
        ) : (
          <Bars3Icon width="24" height="24" />
        )}
      </button>

      {open && (
        <ul style={{ height: open ? bodyHeight : "auto" }}>
          {items?.map((item) => (
            <li key={`menu-${item.href}`}>
              <Link
                href={item.href}
                onClick={() => setTimeout(() => setOpen(false), 300)}
                style={{ padding: "5px" }}
              >
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
