"use client";

import AOS from "aos";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import InViewSectionContextProvider from "../_context/inViewSectionContext";
import { useNavContext } from "@/app/_hooks/useNavContext";
import { GoogleAnalytics } from "@next/third-parties/google";
import { useEffect } from "react";
import Schema from "./Schema";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Body({ children }: React.PropsWithChildren) {
  const { hamburgerIsShown } = useNavContext();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <body
      className={`${inter.className} ${
        hamburgerIsShown ? "overflow-hidden" : ""
      }`}
    >
      <InViewSectionContextProvider>{children}</InViewSectionContextProvider>
      <SpeedInsights />
      <GoogleAnalytics gaId="G-5LGQ62V141" />
      <Schema />
    </body>
  );
}
