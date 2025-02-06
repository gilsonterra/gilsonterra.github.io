import type { Metadata } from "next";
//import "./reset.css";
import "./globals.css";

//import { Baloo_Paaji_2, Patrick_Hand, Righteous } from "next/font/google";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

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
      <body>
        <div className="layout">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
