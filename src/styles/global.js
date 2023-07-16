import { createGlobalStyle } from "styled-components";
import { Lato } from "next/font/google";

const font = Lato({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "700", "900"],
});

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: ${font.style.fontFamily};
    }

    body {
        background-image: url('/endorments.svg')
    }

    h1, h2 {
        background: ${({ theme }) => theme.colors.primary};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;
