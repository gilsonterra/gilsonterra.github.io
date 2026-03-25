"use client";

import { usePathname } from "next/navigation";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

type HomePageFrameProps = {
  children: React.ReactNode;
};

const HomePageFrame: React.FC<HomePageFrameProps> = ({ children }) => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
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
