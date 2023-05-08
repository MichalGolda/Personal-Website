const theme = {
  colors: {
    primary:
      "linear-gradient(180deg, #5200ff 0%, #6129ff 49.79%, #0075ff 100%)",
    secondary: "#001d45",
    tertiary: "#D9D9D9",
  },
  breakpoints: [567, 768, 992, 1200],
  transition: "all 0.2s ease-in-out 0s, all 0.2s ease-in-out 0s",
};

theme.breakpoints.sm = `min-width: ${theme.breakpoints[0]}px`;
theme.breakpoints.md = `min-width: ${theme.breakpoints[1]}px`;
theme.breakpoints.lg = `min-width: ${theme.breakpoints[2]}px`;
theme.breakpoints.xl = `min-width: ${theme.breakpoints[3]}px`;

export { theme };
