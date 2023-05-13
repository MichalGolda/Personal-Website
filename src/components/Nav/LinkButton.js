import { StyledLink, StyledButton } from "./LinkButton.styled";

export default function LinkButton({ children, ...props }) {
  return (
    <StyledLink {...props}>
      <StyledButton variant="outlined">{children}</StyledButton>
    </StyledLink>
  );
}
