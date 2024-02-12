export type AlertProps = {
  className?: string;
  message: string;
};

const Alert: React.FC<AlertProps> = ({ className, message }) => {
  return (
    <div
      className={`w-full p-4 text-white t-0 font-bold text-center absolute z-[999]  ${className}`}
    >
      <p>{message}</p>
    </div>
  );
};

export default Alert;
