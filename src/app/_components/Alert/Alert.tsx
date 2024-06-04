export type AlertProps = {
  className?: string;
  message: string;
};

const Alert: React.FC<AlertProps> = ({ className, message }) => {
  return (
    <div
      className={`w-full p-4 text-white bottom-0 left-0 font-bold text-sm md:text-base text-center fixed z-[999]  ${className}`}
      data-testid="alert"
    >
      <p>{message}</p>
    </div>
  );
};

export default Alert;
