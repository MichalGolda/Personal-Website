import Hero from "./Hero";
import Nav from "./Nav";
import { Container } from "@/app/_components";

export default function Header() {
  return (
    <header className="h-screen">
      <Container className="h-screen">
        <Nav />
        <Hero />
      </Container>
    </header>
  );
}
