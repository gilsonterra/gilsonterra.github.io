import { MenuItems } from "@/app/components/Menu/type";
import Link from "next/link";
import "./style.css";

const MenuDesktop: React.FC<MenuItems> = ({ items }) => {
  return (
    <div className="menu-desktop">
      <ul>
        {items?.map((item) => (
          <li key={`menu-${item.href}`}>
            <Link href={item.href} style={{ padding: "5px" }}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuDesktop;
