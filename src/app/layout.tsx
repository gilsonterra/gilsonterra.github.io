import type { Metadata } from "next";
import "./globals.css";

import { Baloo_Paaji_2, Patrick_Hand, Righteous } from "next/font/google";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

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

export const metadata: Metadata = {
  title: "Gilson Terra",
  description: "Site pesssoal de Gilson Terra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${patrickHand.variable} ${balooPaaji2.variable} ${righteous.variable} antialiased`}
      >
        <div className="grid grid-rows-[auto,1fr,auto] h-screen w-full gap-4 px-8 pt-8 ">
          <Header />
          <main className="flex flex-col items-center gap-8 p-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
