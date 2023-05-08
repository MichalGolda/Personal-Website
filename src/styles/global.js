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
    }

    body {
        font-family: ${font.style.fontFamily};
        background-image: url('/endorments.svg');
    }

    input,
    textarea {
        font-family: ${font.style.fontFamily};
    }
`;
