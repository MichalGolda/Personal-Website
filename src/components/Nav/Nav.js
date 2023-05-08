import {
  StyledNav,
  StyledTextLogo,
  StyledList,
  StyledLink,
  StyledListItem,
  StyledTextLogoGradient,
  StyledHamburger,
} from "./Nav.styled";

export default function Nav() {
  return (
    <StyledNav>
      <StyledTextLogo>
        michal<StyledTextLogoGradient>golda</StyledTextLogoGradient>
      </StyledTextLogo>
      <StyledHamburger />
      <StyledList>
        <StyledLink href="#home">
          <StyledListItem>Strona główna</StyledListItem>
        </StyledLink>
        <StyledLink href="#projects">
          <StyledListItem>Projekty</StyledListItem>
        </StyledLink>
        <StyledLink href="#contact">
          <StyledListItem>Kontakt</StyledListItem>
        </StyledLink>
      </StyledList>
    </StyledNav>
  );
}
