"use client";

import { usePathname } from "next/navigation";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

type HomePageFrameProps = {
  children: React.ReactNode;
};

const STATIC_FULL_BLEED_PATHS = new Set(["/"]);
const STATIC_CONTENT_PATHS = new Set([
  "/notas",
  "/sobre",
  "/playground",
  "/optimistic-ui",
  "/performance-percebida",
  "/error-boundary",
  "/tanstack-query",
]);

const isSingleNestedRoute = (pathname: string, basePath: string) => {
  if (!pathname.startsWith(basePath + "/")) {
    return false;
  }

  const rest = pathname.slice(basePath.length + 1);
  return rest.length > 0 && !rest.includes("/");
};

const isKnownDynamicRoute = (pathname: string) => {
  return isSingleNestedRoute(pathname, "/notas") || isSingleNestedRoute(pathname, "/categoria");
};

const HomePageFrame: React.FC<HomePageFrameProps> = ({ children }) => {
  const pathname = usePathname();
  const isHome = STATIC_FULL_BLEED_PATHS.has(pathname);
  const isKnownRoute = STATIC_CONTENT_PATHS.has(pathname) || isKnownDynamicRoute(pathname);
  const isNotFound = !isHome && !isKnownRoute;

  if (isHome || isNotFound) {
    return <>{children}</>;
  }

  return (
    <div className="layout">
      <main>
        <Content>{children}</Content>
      </main>
      <Footer />
    </div>
  );
};

export default HomePageFrame;
