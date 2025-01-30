import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AOSInitializer from "@/components/smallcomponents/AOSInitializer";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/Cartcontext";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "FoodZone",
  description: "Find Your Favourite Food Here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased `}>
        {/* <body className={`antialiased `}> */}
        <CartProvider>
          <div className=" mx-auto min-h-screen flex flex-col scroll-smooth">
            <Navbar />
            <main className="flex-1">
              {children}
              <AOSInitializer />
            </main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
