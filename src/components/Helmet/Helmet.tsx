import Head from "next/head";

export default function Helmet() {
  return (
    <Head>
      <title>Michał Gołda</title>
      <meta charSet="utf-8" />
      <meta name="revisit-after" content="1 day" />
      <meta name="author" content="Michał Gołda" />
      <meta
        name="description"
        content="Witaj na mojej personalnej stronie internetowej! Jestem Michał, pasjonuje się programowaniem i tworzeniem stron internetowych. Znajdziesz tutaj moje portfolio z zrealizowanymi projektami, które świadczą o moich umiejętnościach i pasji. Jeśli potrzebujesz wsparcia w zakresie tworzenia stron internetowych, aplikacji webowych lub chcesz porozmawiać o współpracy, skontaktuj się ze mną."
      />
      <meta
        name="keywords"
        content="Full-stack developer, Portfolio, Tworzenie stron internetowych, Tworzenie aplikacji webowych, Optymalizacja stron internetowych, Programowanie, UX, UI"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
