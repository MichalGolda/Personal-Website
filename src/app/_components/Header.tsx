import Hero from "./Hero";
import Nav from "./Nav";
import ScrollDown from "./ScrollDown";

export default function Header() {
  return (
    <header className="w-full h-screen">
      <Nav />
      <Hero />
    </header>
  );
}
