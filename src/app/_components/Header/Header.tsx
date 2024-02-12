import Hero from "./Hero";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="w-full h-screen max-w-[1320px] mx-auto">
      <Nav />
      <Hero />
    </header>
  );
}
