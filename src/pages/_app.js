import { GlobalStyle } from "@/styles/global";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
