import type { Metadata } from "next";
import "./globals.css";
import "aos/dist/aos.css";
import { Body } from "@/app/_components";
import { NavContextProvider } from "./_context/navContext";

export const viewport = {
  minimumScale: 1,
};

export const metadata: Metadata = {
  title: "Dedykowane strony internetowe i aplikacje webowe - Michał Gołda",
  description:
    "Szukasz profesjonalnych usług tworzenia stron internetowych lub aplikacji webowych? Dobrze trafiłeś, chcesz porozmawiać o współpracy, skontaktuj się ze mną.",
  keywords:
    "Full-stack developer, Portfolio, Tworzenie stron internetowych, Tworzenie aplikacji webowych, Optymalizacja stron internetowych, Programowanie, UX, UI, Wordpress, Wordpress CMS, Core Web Vitals, Optymalizacja, Konfiguracja, Personalizacja motywu, Połączenie usług analitycznych, Konfiguracja domeny i serwera, Konfiguracja kont pocztowych, Integracje API, Instalacja i konfiguracja wtyczek Wordpress, Wtyczki wordpress, Szkolenie z obsługi strony, Migracja starej strony na Wordpress CMS, Aktualizacja strony, szablonu i wtyczek, Instalacja usługi livechat, Aktywacja certyfikatu SSL, Konfiguracja formularzy kontaktowych, Zabezpieczenie strony, Unikalna strona www",
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
    "yandex-verification": "7a49a3499e33bc86",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <NavContextProvider>
        <Body>{children}</Body>
      </NavContextProvider>
    </html>
  );
}
