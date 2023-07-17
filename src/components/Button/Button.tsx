import React from "react";
import { StyledButton } from "./Button.styled";

export type ButtonProps = {
  type?: "button" | "submit" | "reset";
  variant: "primary" | "outlined" | "outlinedLoading";
};

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => <StyledButton {...props}>{children}</StyledButton>;

export default Button;
