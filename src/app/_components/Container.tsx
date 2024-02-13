export type ContainerProps = React.PropsWithChildren<{
  className?: string;
}>;

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div
      className={`md:max-w-[1024px] lg:max-w-[1320px] w-full mx-auto md:px-16 px-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
