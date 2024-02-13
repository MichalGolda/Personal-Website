export type SectionHeadingProps = React.PropsWithChildren<{
  title: string;
  headline: string;
  body?: string;
}>;

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  headline,
  body,
  ...props
}) => {
  return (
    <div className="text-center max-w-3xl mx-auto" {...props}>
      <span className="text-primary font-semibold text-md md:text-lg lg:text-xl uppercase">
        {headline}
      </span>
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-secondary font-bold">
        {title}
      </h2>
      {body && <p className="text-sm md:text-base text-body mt-4">{body}</p>}
    </div>
  );
};

export default SectionHeading;
