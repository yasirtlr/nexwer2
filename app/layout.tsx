import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Footer from "./components/common/Footer";
import HeaderOne from "./components/common/HeaderOne";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexwerx",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} antialiased`}
      >
        <HeaderOne/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}