import type { Metadata } from "next";
//import "./reset.css";
import "./globals.css";

//import { Baloo_Paaji_2, Patrick_Hand, Righteous } from "next/font/google";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ThemeProvider from "./providers/themeProvider";

/*
const patrickHand = Patrick_Hand({
  weight: "400",
  variable: "--patrick-hand",
  subsets: ["latin"],
});

const balooPaaji2 = Baloo_Paaji_2({
  weight: "400",
  variable: "--ballo-paaji-2",
  subsets: ["latin"],
});

const righteous = Righteous({
  weight: "400",
  variable: "--righteous",
  subsets: ["latin"],
});
*/

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
      <ThemeProvider>
        <Body>
          <div className="layout">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </Body>
      </ThemeProvider>
    </html>
  );
}
