import Hero from "../Hero/Hero";
import Nav from "../Nav/Nav";
import { StyledHeader } from "./Header.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Nav />
      <Hero />
    </StyledHeader>
  );
}
