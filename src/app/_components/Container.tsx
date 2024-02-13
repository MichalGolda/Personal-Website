export type ContainerProps = React.PropsWithChildren<{
  className?: string;
}>;

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={`max-w-[1320px] mx-auto ${className}`}>{children}</div>
  );
};

export default Container;
