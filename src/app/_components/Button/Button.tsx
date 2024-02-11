export type ButtonProps = {
  className?: string;
};

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <button
      className={`py-4 px-8 font-bold transition-all duration-500 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
