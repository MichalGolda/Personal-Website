import {
  StyledHeaderContainer,
  StyledInscription,
  StyledList,
  StyledLink,
  StyledListItem,
} from "./Header.styled";

export default function Header() {
  return (
    <StyledHeaderContainer as="header">
      <StyledInscription>
        michal<span>golda</span>
      </StyledInscription>
      <StyledList>
        <StyledLink href="#start">
          <StyledListItem>Start</StyledListItem>
        </StyledLink>
        <StyledLink href="#projects">
          <StyledListItem>Projekty</StyledListItem>
        </StyledLink>
        <StyledLink href="#contact">
          <StyledListItem>Kontakt</StyledListItem>
        </StyledLink>
      </StyledList>
    </StyledHeaderContainer>
  );
}
