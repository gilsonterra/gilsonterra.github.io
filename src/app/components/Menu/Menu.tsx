import Link, { LinkProps } from "next/link";

const CustomLink: React.FC<LinkProps & { children: React.ReactNode }> = ({
  href,
  children,
}) => {
  return (
    <div className="h-6 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-white hover:after:w-full after:transition-all after:duration-300">
      <Link
        href={href}
        className="block hover:-translate-y-1 transition-transform duration-600 ease-in-out box-content"
      >
        {children}
      </Link>
    </div>
  );
};

const Menu: React.FC = () => {
  return (
    <nav>
      <ul className="flex gap-6">
        <li>
          <CustomLink href="/notas">Notas</CustomLink>
        </li>
        <li>
          <CustomLink href="/playground">Playground</CustomLink>
        </li>
        <li>
          <CustomLink href="/sobre">Sobre</CustomLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
