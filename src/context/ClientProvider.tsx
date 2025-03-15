"use client";

import { ReactNode } from "react";
import { CartProvider } from "@/context/Cartcontext";

export const ClientProviders = ({ children }: { children: ReactNode }) => {
  return <CartProvider>{children}</CartProvider>;
};
