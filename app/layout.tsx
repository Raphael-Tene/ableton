import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import StickyNavbar from "@/components/StickyNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ableton",
  description: "Practice frontend development with Ableton",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-red-300`}>
        <Navbar />
        <StickyNavbar />
        {children}
      </body>
    </html>
  );
}
