"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export const SessionProviderWrapper = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <SessionProvider>{children}</SessionProvider>;
};
