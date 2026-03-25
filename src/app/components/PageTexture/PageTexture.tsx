"use client";

import { usePathname } from "next/navigation";

const PageTexture: React.FC = () => {
  const pathname = usePathname();
  const shouldRender =
    pathname === "/" ||
    pathname === "/playground" ||
    pathname === "/sobre" ||
    pathname.startsWith("/notas");

  if (!shouldRender) {
    return null;
  }

  return <div className="site-texture" aria-hidden="true" />;
};

export default PageTexture;
