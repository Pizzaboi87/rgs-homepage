import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import type { Metadata } from "next";
import { AOSInit } from "../utils/aosInit";
import { metadataLines } from "@/data/metaData";

import "./globals.css";

export const metadata: Metadata = metadataLines;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="https://www.datocms-assets.com/64053/1647525692-logo_min.svg"
        />
      </head>
      <AOSInit />
      <body
        data-aos-easing="fade-in"
        data-aos-duration="800"
        data-aos-delay="0"
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
