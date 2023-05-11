import { StyledList, StyledLink, StyledListItem } from "./LinkList.styled";

export default function LinkList() {
  return (
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
  );
}
