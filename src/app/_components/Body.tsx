"use client";

import { Inter } from "next/font/google";
import { NavContextProvider } from "../_context/navContext";
import InViewSectionContextProvider from "../_context/inViewSectionContext";
import { useNavContext } from "../_context/navContext";
import { useEffect } from "react";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Body({ children }: React.PropsWithChildren) {
  const { hamburger } = useNavContext();

  return (
    <body
      className={`${inter.className} ${hamburger ? "overflow-hidden" : ""}`}
    >
      <InViewSectionContextProvider>{children}</InViewSectionContextProvider>
    </body>
  );
}
