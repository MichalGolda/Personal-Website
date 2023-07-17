import Inscription from "./Inscription";
import LinkList from "./LinkList";
import { StyledNav, StyledLinkButton } from "./Nav.styled";

export default function Nav() {
  return (
    <StyledNav>
      <Inscription />
      <StyledLinkButton href="#projects" variant="outlined">
        Projekty
      </StyledLinkButton>
      <LinkList />
    </StyledNav>
  );
}
