import Button from "./Button";
import type { ButtonProps } from "./Button";

const PrimaryButton: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <Button
      className={`bg-primary text-white hover:bg-primary/90 active:bg-primary/80 ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
