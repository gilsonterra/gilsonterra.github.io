"use client";

import { useTheme } from "@/app/providers/themeProvider";

type BodyProps = {
  children: React.ReactNode;
};

const Body: React.FC<BodyProps> = ({ children }) => {
  const { theme } = useTheme();

  return <body data-theme={theme}>{children}</body>;
};

export default Body;
