import Button from "./Button";
import type { ButtonProps } from "./Button";

const SecondaryOutlinedButton: React.FC<
  React.PropsWithChildren<ButtonProps>
> = ({ className = "", children, ...props }) => {
  return (
    <Button
      className={`bg-transparent border-secondary border border-solid hover:bg-secondary active:bg-secondary/80 hover:text-white text-secondary ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SecondaryOutlinedButton;
