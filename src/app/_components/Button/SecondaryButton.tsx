import Button from "./Button";
import type { ButtonProps } from "./Button";

const SecondaryButton: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <Button
      className={`bg-secondary text-white hover:bg-secondary/90 active:bg-secondary/80 border border-transparent ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
