import type { Metadata } from "next";
import "./globals.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import HomePageFrame from "./components/HomePageFrame";
import ReactQueryProvider from "./components/ReactQueryProvider/ReactQueryProvider";

export const metadata: Metadata = {
  title: "Gilson Terra",
  description: "Site pessoal de Gilson Terra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <Body>
        <Header />
        <HomePageFrame>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </HomePageFrame>
      </Body>
    </html>
  );
}
