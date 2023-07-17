import React from "react";
import Button from "../Button/Button";
import type { ButtonProps } from "../Button/Button";

export type LinkButtonProps = ButtonProps & {
  href: string;
};

const LinkButton: React.FC<React.PropsWithChildren<LinkButtonProps>> = ({
  children,
  href,
  ...props
}) => {
  return (
    <a href={href}>
      <Button {...props}>{children}</Button>
    </a>
  );
};

export default LinkButton;
