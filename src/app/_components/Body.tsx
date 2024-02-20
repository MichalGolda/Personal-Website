"use client";

import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import InViewSectionContextProvider from "../_context/inViewSectionContext";
import { useNavContext } from "../_context/navContext";
import { GoogleAnalytics } from "@next/third-parties/google";

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
      <SpeedInsights />
      <GoogleAnalytics gaId="G-5LGQ62V141" />
    </body>
  );
}
