import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import PreviewProvider from "@/provider/preview-provider";
import { Toaster } from "@/components/ui/toaster";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "store",
  description: "store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Toaster />
        <PreviewProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
