import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AOSInitializer from "@/components/sections/AOSInitializer";
import Footer from "@/components/Footer";
import { ClientProviders } from "@/context/ClientProvider";
import Provider from "@/components/Provider/Provider";
import { Toaster } from "react-hot-toast";
import { SessionProviderWrapper } from "@/components/sections/SessionProviderWrapper";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-serif" });

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
    <html lang="en" className={outfit.className}>
      <body className="antialiased">
        <SessionProviderWrapper>
          <ClientProviders>
            <div className="mx-auto min-h-screen flex flex-col scroll-smooth">
              <Navbar />
              <main className="flex-1">
                <Provider>
                  {children}
                  <Toaster position="top-center" />
                </Provider>
                <AOSInitializer />
              </main>
              <Footer />
            </div>
          </ClientProviders>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
