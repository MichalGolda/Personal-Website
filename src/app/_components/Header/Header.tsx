"use client";

import Hero from "./Hero";
import Nav from "./Nav";
import { Container } from "@/app/_components";
import { useInViewSection } from "@/app/_context/inViewSectionContext";

export default function Header() {
  const { ref } = useInViewSection("#top");

  return (
    <header ref={ref} className="h-screen">
      <Container className="h-screen">
        <Nav />
        <Hero />
      </Container>
    </header>
  );
}
