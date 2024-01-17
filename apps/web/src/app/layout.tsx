// import "./globals.css";
// import "@repo/ui/styles";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./ui/bottomnav";
import NavTest from "./ui/navtest";
import Popup from "./ui/popupnav";
import TopTopNav from "./ui/toptopnav";
import SideNav from "./ui/sidenav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Turborepo",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">

      <head>
          
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </head>

      <body className={`${inter.className} antialiased`}>
      <header>
          <TopTopNav />
        </header>
        
        {children}
          <Navbar />
        {/* <Navbar /> */}
        
        {/* <Popup />
        <Navbar />
        <SideNav /> */}
        </body>
    </html>
  );
}
