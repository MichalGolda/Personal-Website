import Hamburger from "./Hamburger";
import Inscription from "./Inscription";
import LinkList from "./LinkList";
import { StyledNav } from "./Nav.styled";

export default function Nav() {
  return (
    <StyledNav>
      <Inscription />
      <Hamburger />
      <LinkList />
    </StyledNav>
  );
}
