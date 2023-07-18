import { StyledFooter, StyledText } from "./Footer.styled";
import { getCurrentYear } from "@/utils/getCurrentYear";

export default function Footer() {
  return (
    <StyledFooter>
      <StyledText>
        © {getCurrentYear()} Michał Gołda. All rights reserved
      </StyledText>
    </StyledFooter>
  );
}
