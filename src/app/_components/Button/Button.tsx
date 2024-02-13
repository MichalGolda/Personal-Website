export type ButtonProps = React.ButtonHTMLAttributes<{
  className?: string;
}>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <button
      className={`py-4 px-8 font-bold text-sm md:text-base transition-all duration-500 disabled:bg-lightGrey disabled:text-body ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
