import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import InViewSectionContextProvider from "./_context/inViewSectionContext";
import { NavContextProvider } from "./_context/navContext";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dedykowane strony internetowe i aplikacje webowe - Michał Gołda",
  description:
    "Witaj na mojej personalnej stronie internetowej! Jestem Michał, pasjonuje się programowaniem i tworzeniem stron internetowych. Znajdziesz tutaj moje portfolio z zrealizowanymi projektami, które świadczą o moich umiejętnościach i pasji. Jeśli potrzebujesz wsparcia w zakresie tworzenia stron internetowych, aplikacji webowych lub chcesz porozmawiać o współpracy, skontaktuj się ze mną.",
  keywords:
    "Full-stack developer, Portfolio, Tworzenie stron internetowych, Tworzenie aplikacji webowych, Optymalizacja stron internetowych, Programowanie, UX, UI",
  authors: {
    name: "Michał Gołda",
    url: "https://github.com/michalgolda",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "google-site-verification": "iGm5ckXvDyitftCfUi6T0DLfXc20aaThtTi40OrxzTM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <NavContextProvider>
          <InViewSectionContextProvider>
            {children}
          </InViewSectionContextProvider>
        </NavContextProvider>
      </body>
    </html>
  );
}
