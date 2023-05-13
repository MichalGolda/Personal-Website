import Inscription from "./Inscription";
import LinkButton from "./LinkButton";
import LinkList from "./LinkList";
import { StyledNav } from "./Nav.styled";

export default function Nav() {
  return (
    <StyledNav>
      <Inscription />
      <LinkButton href="#projects">Projekty</LinkButton>
      <LinkList />
    </StyledNav>
  );
}
